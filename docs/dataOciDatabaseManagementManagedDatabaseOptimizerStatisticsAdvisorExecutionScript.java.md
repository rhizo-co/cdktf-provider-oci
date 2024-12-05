# `dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script oci_database_management_managed_database_optimizer_statistics_advisor_execution_script}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_optimizer_statistics_advisor_execution_script.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript;

DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Builder.create(Construct scope, java.lang.String id)
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
    .executionName(java.lang.String)
    .managedDatabaseId(java.lang.String)
    .taskName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.executionName">executionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#execution_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#execution_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.taskName">taskName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#task_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#task_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `executionName`<sup>Required</sup> <a name="executionName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.executionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#execution_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#execution_name}.

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.managedDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#managed_database_id}.

---

##### `taskName`<sup>Required</sup> <a name="taskName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.taskName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#task_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#task_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_optimizer_statistics_advisor_execution_script.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript;

DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_optimizer_statistics_advisor_execution_script.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript;

DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_optimizer_statistics_advisor_execution_script.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript;

DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_optimizer_statistics_advisor_execution_script.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript;

DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.script">script</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.executionNameInput">executionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.taskNameInput">taskNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.executionName">executionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.taskName">taskName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `script`<sup>Required</sup> <a name="script" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.script"></a>

```java
public java.lang.String getScript();
```

- *Type:* java.lang.String

---

##### `executionNameInput`<sup>Optional</sup> <a name="executionNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.executionNameInput"></a>

```java
public java.lang.String getExecutionNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.managedDatabaseIdInput"></a>

```java
public java.lang.String getManagedDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `taskNameInput`<sup>Optional</sup> <a name="taskNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.taskNameInput"></a>

```java
public java.lang.String getTaskNameInput();
```

- *Type:* java.lang.String

---

##### `executionName`<sup>Required</sup> <a name="executionName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.executionName"></a>

```java
public java.lang.String getExecutionName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

---

##### `taskName`<sup>Required</sup> <a name="taskName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.taskName"></a>

```java
public java.lang.String getTaskName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_optimizer_statistics_advisor_execution_script.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig;

DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.builder()
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
    .executionName(java.lang.String)
    .managedDatabaseId(java.lang.String)
    .taskName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.executionName">executionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#execution_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#execution_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.taskName">taskName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#task_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#task_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `executionName`<sup>Required</sup> <a name="executionName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.executionName"></a>

```java
public java.lang.String getExecutionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#execution_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#execution_name}.

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#managed_database_id}.

---

##### `taskName`<sup>Required</sup> <a name="taskName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.taskName"></a>

```java
public java.lang.String getTaskName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#task_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#task_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScriptConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution_script#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



