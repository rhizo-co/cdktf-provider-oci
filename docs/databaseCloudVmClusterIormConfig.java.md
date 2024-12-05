# `databaseCloudVmClusterIormConfig` Submodule <a name="`databaseCloudVmClusterIormConfig` Submodule" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseCloudVmClusterIormConfig <a name="DatabaseCloudVmClusterIormConfig" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config oci_database_cloud_vm_cluster_iorm_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster_iorm_config.DatabaseCloudVmClusterIormConfig;

DatabaseCloudVmClusterIormConfig.Builder.create(Construct scope, java.lang.String id)
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
    .cloudVmClusterId(java.lang.String)
    .dbPlans(IResolvable)
    .dbPlans(java.util.List<DatabaseCloudVmClusterIormConfigDbPlans>)
//  .id(java.lang.String)
//  .objective(java.lang.String)
//  .timeouts(DatabaseCloudVmClusterIormConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.cloudVmClusterId">cloudVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#cloud_vm_cluster_id DatabaseCloudVmClusterIormConfig#cloud_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.dbPlans">dbPlans</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>></code> | db_plans block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#id DatabaseCloudVmClusterIormConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.objective">objective</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#objective DatabaseCloudVmClusterIormConfig#objective}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.cloudVmClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#cloud_vm_cluster_id DatabaseCloudVmClusterIormConfig#cloud_vm_cluster_id}.

---

##### `dbPlans`<sup>Required</sup> <a name="dbPlans" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.dbPlans"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>>

db_plans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#db_plans DatabaseCloudVmClusterIormConfig#db_plans}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#id DatabaseCloudVmClusterIormConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objective`<sup>Optional</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.objective"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#objective DatabaseCloudVmClusterIormConfig#objective}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#timeouts DatabaseCloudVmClusterIormConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putDbPlans">putDbPlans</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetObjective">resetObjective</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDbPlans` <a name="putDbPlans" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putDbPlans"></a>

```java
public void putDbPlans(IResolvable OR java.util.List<DatabaseCloudVmClusterIormConfigDbPlans> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putDbPlans.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putTimeouts"></a>

```java
public void putTimeouts(DatabaseCloudVmClusterIormConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetId"></a>

```java
public void resetId()
```

##### `resetObjective` <a name="resetObjective" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetObjective"></a>

```java
public void resetObjective()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseCloudVmClusterIormConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster_iorm_config.DatabaseCloudVmClusterIormConfig;

DatabaseCloudVmClusterIormConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster_iorm_config.DatabaseCloudVmClusterIormConfig;

DatabaseCloudVmClusterIormConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster_iorm_config.DatabaseCloudVmClusterIormConfig;

DatabaseCloudVmClusterIormConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster_iorm_config.DatabaseCloudVmClusterIormConfig;

DatabaseCloudVmClusterIormConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseCloudVmClusterIormConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseCloudVmClusterIormConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseCloudVmClusterIormConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseCloudVmClusterIormConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseCloudVmClusterIormConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dbPlans">dbPlans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList">DatabaseCloudVmClusterIormConfigDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference">DatabaseCloudVmClusterIormConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cloudVmClusterIdInput">cloudVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dbPlansInput">dbPlansInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.objectiveInput">objectiveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.objective">objective</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbPlans`<sup>Required</sup> <a name="dbPlans" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dbPlans"></a>

```java
public DatabaseCloudVmClusterIormConfigDbPlansList getDbPlans();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList">DatabaseCloudVmClusterIormConfigDbPlansList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.timeouts"></a>

```java
public DatabaseCloudVmClusterIormConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference">DatabaseCloudVmClusterIormConfigTimeoutsOutputReference</a>

---

##### `cloudVmClusterIdInput`<sup>Optional</sup> <a name="cloudVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cloudVmClusterIdInput"></a>

```java
public java.lang.String getCloudVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `dbPlansInput`<sup>Optional</sup> <a name="dbPlansInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dbPlansInput"></a>

```java
public java.lang.Object getDbPlansInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `objectiveInput`<sup>Optional</sup> <a name="objectiveInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.objectiveInput"></a>

```java
public java.lang.String getObjectiveInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a>

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cloudVmClusterId"></a>

```java
public java.lang.String getCloudVmClusterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `objective`<sup>Required</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.objective"></a>

```java
public java.lang.String getObjective();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseCloudVmClusterIormConfigConfig <a name="DatabaseCloudVmClusterIormConfigConfig" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster_iorm_config.DatabaseCloudVmClusterIormConfigConfig;

DatabaseCloudVmClusterIormConfigConfig.builder()
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
    .cloudVmClusterId(java.lang.String)
    .dbPlans(IResolvable)
    .dbPlans(java.util.List<DatabaseCloudVmClusterIormConfigDbPlans>)
//  .id(java.lang.String)
//  .objective(java.lang.String)
//  .timeouts(DatabaseCloudVmClusterIormConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#cloud_vm_cluster_id DatabaseCloudVmClusterIormConfig#cloud_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.dbPlans">dbPlans</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>></code> | db_plans block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#id DatabaseCloudVmClusterIormConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.objective">objective</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#objective DatabaseCloudVmClusterIormConfig#objective}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.cloudVmClusterId"></a>

```java
public java.lang.String getCloudVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#cloud_vm_cluster_id DatabaseCloudVmClusterIormConfig#cloud_vm_cluster_id}.

---

##### `dbPlans`<sup>Required</sup> <a name="dbPlans" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.dbPlans"></a>

```java
public java.lang.Object getDbPlans();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>>

db_plans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#db_plans DatabaseCloudVmClusterIormConfig#db_plans}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#id DatabaseCloudVmClusterIormConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objective`<sup>Optional</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.objective"></a>

```java
public java.lang.String getObjective();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#objective DatabaseCloudVmClusterIormConfig#objective}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.timeouts"></a>

```java
public DatabaseCloudVmClusterIormConfigTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#timeouts DatabaseCloudVmClusterIormConfig#timeouts}

---

### DatabaseCloudVmClusterIormConfigDbPlans <a name="DatabaseCloudVmClusterIormConfigDbPlans" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster_iorm_config.DatabaseCloudVmClusterIormConfigDbPlans;

DatabaseCloudVmClusterIormConfigDbPlans.builder()
    .dbName(java.lang.String)
    .share(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans.property.dbName">dbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#db_name DatabaseCloudVmClusterIormConfig#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans.property.share">share</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#share DatabaseCloudVmClusterIormConfig#share}. |

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#db_name DatabaseCloudVmClusterIormConfig#db_name}.

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans.property.share"></a>

```java
public java.lang.Number getShare();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#share DatabaseCloudVmClusterIormConfig#share}.

---

### DatabaseCloudVmClusterIormConfigTimeouts <a name="DatabaseCloudVmClusterIormConfigTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster_iorm_config.DatabaseCloudVmClusterIormConfigTimeouts;

DatabaseCloudVmClusterIormConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#create DatabaseCloudVmClusterIormConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#delete DatabaseCloudVmClusterIormConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#update DatabaseCloudVmClusterIormConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#create DatabaseCloudVmClusterIormConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#delete DatabaseCloudVmClusterIormConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#update DatabaseCloudVmClusterIormConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseCloudVmClusterIormConfigDbPlansList <a name="DatabaseCloudVmClusterIormConfigDbPlansList" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster_iorm_config.DatabaseCloudVmClusterIormConfigDbPlansList;

new DatabaseCloudVmClusterIormConfigDbPlansList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.get"></a>

```java
public DatabaseCloudVmClusterIormConfigDbPlansOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>>

---


### DatabaseCloudVmClusterIormConfigDbPlansOutputReference <a name="DatabaseCloudVmClusterIormConfigDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster_iorm_config.DatabaseCloudVmClusterIormConfigDbPlansOutputReference;

new DatabaseCloudVmClusterIormConfigDbPlansOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.flashCacheLimit">flashCacheLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.dbNameInput">dbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.shareInput">shareInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.share">share</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flashCacheLimit`<sup>Required</sup> <a name="flashCacheLimit" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.flashCacheLimit"></a>

```java
public java.lang.String getFlashCacheLimit();
```

- *Type:* java.lang.String

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.dbNameInput"></a>

```java
public java.lang.String getDbNameInput();
```

- *Type:* java.lang.String

---

##### `shareInput`<sup>Optional</sup> <a name="shareInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.shareInput"></a>

```java
public java.lang.Number getShareInput();
```

- *Type:* java.lang.Number

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.share"></a>

```java
public java.lang.Number getShare();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>

---


### DatabaseCloudVmClusterIormConfigTimeoutsOutputReference <a name="DatabaseCloudVmClusterIormConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_vm_cluster_iorm_config.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference;

new DatabaseCloudVmClusterIormConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a>

---



