# `cloudMigrationsMigrationPlan` Submodule <a name="`cloudMigrationsMigrationPlan` Submodule" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudMigrationsMigrationPlan <a name="CloudMigrationsMigrationPlan" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan oci_cloud_migrations_migration_plan}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlan;

CloudMigrationsMigrationPlan.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .migrationId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .sourceMigrationPlanId(java.lang.String)
//  .strategies(IResolvable)
//  .strategies(java.util.List<CloudMigrationsMigrationPlanStrategies>)
//  .targetEnvironments(IResolvable)
//  .targetEnvironments(java.util.List<CloudMigrationsMigrationPlanTargetEnvironments>)
//  .timeouts(CloudMigrationsMigrationPlanTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#compartment_id CloudMigrationsMigrationPlan#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#display_name CloudMigrationsMigrationPlan#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.migrationId">migrationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#migration_id CloudMigrationsMigrationPlan#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#defined_tags CloudMigrationsMigrationPlan#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#freeform_tags CloudMigrationsMigrationPlan#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#id CloudMigrationsMigrationPlan#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.sourceMigrationPlanId">sourceMigrationPlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#source_migration_plan_id CloudMigrationsMigrationPlan#source_migration_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.strategies">strategies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>></code> | strategies block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.targetEnvironments">targetEnvironments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>></code> | target_environments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#compartment_id CloudMigrationsMigrationPlan#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#display_name CloudMigrationsMigrationPlan#display_name}.

---

##### `migrationId`<sup>Required</sup> <a name="migrationId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.migrationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#migration_id CloudMigrationsMigrationPlan#migration_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#defined_tags CloudMigrationsMigrationPlan#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#freeform_tags CloudMigrationsMigrationPlan#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#id CloudMigrationsMigrationPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceMigrationPlanId`<sup>Optional</sup> <a name="sourceMigrationPlanId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.sourceMigrationPlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#source_migration_plan_id CloudMigrationsMigrationPlan#source_migration_plan_id}.

---

##### `strategies`<sup>Optional</sup> <a name="strategies" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.strategies"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>>

strategies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#strategies CloudMigrationsMigrationPlan#strategies}

---

##### `targetEnvironments`<sup>Optional</sup> <a name="targetEnvironments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.targetEnvironments"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>>

target_environments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#target_environments CloudMigrationsMigrationPlan#target_environments}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#timeouts CloudMigrationsMigrationPlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putStrategies">putStrategies</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTargetEnvironments">putTargetEnvironments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetSourceMigrationPlanId">resetSourceMigrationPlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetStrategies">resetStrategies</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetTargetEnvironments">resetTargetEnvironments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStrategies` <a name="putStrategies" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putStrategies"></a>

```java
public void putStrategies(IResolvable OR java.util.List<CloudMigrationsMigrationPlanStrategies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putStrategies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>>

---

##### `putTargetEnvironments` <a name="putTargetEnvironments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTargetEnvironments"></a>

```java
public void putTargetEnvironments(IResolvable OR java.util.List<CloudMigrationsMigrationPlanTargetEnvironments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTargetEnvironments.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTimeouts"></a>

```java
public void putTimeouts(CloudMigrationsMigrationPlanTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetId"></a>

```java
public void resetId()
```

##### `resetSourceMigrationPlanId` <a name="resetSourceMigrationPlanId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetSourceMigrationPlanId"></a>

```java
public void resetSourceMigrationPlanId()
```

##### `resetStrategies` <a name="resetStrategies" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetStrategies"></a>

```java
public void resetStrategies()
```

##### `resetTargetEnvironments` <a name="resetTargetEnvironments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetTargetEnvironments"></a>

```java
public void resetTargetEnvironments()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudMigrationsMigrationPlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlan;

CloudMigrationsMigrationPlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlan;

CloudMigrationsMigrationPlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlan;

CloudMigrationsMigrationPlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlan;

CloudMigrationsMigrationPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudMigrationsMigrationPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudMigrationsMigrationPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudMigrationsMigrationPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudMigrationsMigrationPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudMigrationsMigrationPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.calculatedLimits">calculatedLimits</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationPlanStats">migrationPlanStats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList">CloudMigrationsMigrationPlanMigrationPlanStatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.referenceToRmsStack">referenceToRmsStack</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.strategies">strategies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList">CloudMigrationsMigrationPlanStrategiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.targetEnvironments">targetEnvironments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList">CloudMigrationsMigrationPlanTargetEnvironmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference">CloudMigrationsMigrationPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationIdInput">migrationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.sourceMigrationPlanIdInput">sourceMigrationPlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.strategiesInput">strategiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.targetEnvironmentsInput">targetEnvironmentsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationId">migrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.sourceMigrationPlanId">sourceMigrationPlanId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `calculatedLimits`<sup>Required</sup> <a name="calculatedLimits" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.calculatedLimits"></a>

```java
public StringMap getCalculatedLimits();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `migrationPlanStats`<sup>Required</sup> <a name="migrationPlanStats" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationPlanStats"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStatsList getMigrationPlanStats();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList">CloudMigrationsMigrationPlanMigrationPlanStatsList</a>

---

##### `referenceToRmsStack`<sup>Required</sup> <a name="referenceToRmsStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.referenceToRmsStack"></a>

```java
public java.lang.String getReferenceToRmsStack();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `strategies`<sup>Required</sup> <a name="strategies" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.strategies"></a>

```java
public CloudMigrationsMigrationPlanStrategiesList getStrategies();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList">CloudMigrationsMigrationPlanStrategiesList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `targetEnvironments`<sup>Required</sup> <a name="targetEnvironments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.targetEnvironments"></a>

```java
public CloudMigrationsMigrationPlanTargetEnvironmentsList getTargetEnvironments();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList">CloudMigrationsMigrationPlanTargetEnvironmentsList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeouts"></a>

```java
public CloudMigrationsMigrationPlanTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference">CloudMigrationsMigrationPlanTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `migrationIdInput`<sup>Optional</sup> <a name="migrationIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationIdInput"></a>

```java
public java.lang.String getMigrationIdInput();
```

- *Type:* java.lang.String

---

##### `sourceMigrationPlanIdInput`<sup>Optional</sup> <a name="sourceMigrationPlanIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.sourceMigrationPlanIdInput"></a>

```java
public java.lang.String getSourceMigrationPlanIdInput();
```

- *Type:* java.lang.String

---

##### `strategiesInput`<sup>Optional</sup> <a name="strategiesInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.strategiesInput"></a>

```java
public java.lang.Object getStrategiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>>

---

##### `targetEnvironmentsInput`<sup>Optional</sup> <a name="targetEnvironmentsInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.targetEnvironmentsInput"></a>

```java
public java.lang.Object getTargetEnvironmentsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `migrationId`<sup>Required</sup> <a name="migrationId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationId"></a>

```java
public java.lang.String getMigrationId();
```

- *Type:* java.lang.String

---

##### `sourceMigrationPlanId`<sup>Required</sup> <a name="sourceMigrationPlanId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.sourceMigrationPlanId"></a>

```java
public java.lang.String getSourceMigrationPlanId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudMigrationsMigrationPlanConfig <a name="CloudMigrationsMigrationPlanConfig" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanConfig;

CloudMigrationsMigrationPlanConfig.builder()
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
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .migrationId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .sourceMigrationPlanId(java.lang.String)
//  .strategies(IResolvable)
//  .strategies(java.util.List<CloudMigrationsMigrationPlanStrategies>)
//  .targetEnvironments(IResolvable)
//  .targetEnvironments(java.util.List<CloudMigrationsMigrationPlanTargetEnvironments>)
//  .timeouts(CloudMigrationsMigrationPlanTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#compartment_id CloudMigrationsMigrationPlan#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#display_name CloudMigrationsMigrationPlan#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.migrationId">migrationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#migration_id CloudMigrationsMigrationPlan#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#defined_tags CloudMigrationsMigrationPlan#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#freeform_tags CloudMigrationsMigrationPlan#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#id CloudMigrationsMigrationPlan#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.sourceMigrationPlanId">sourceMigrationPlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#source_migration_plan_id CloudMigrationsMigrationPlan#source_migration_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.strategies">strategies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>></code> | strategies block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.targetEnvironments">targetEnvironments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>></code> | target_environments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#compartment_id CloudMigrationsMigrationPlan#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#display_name CloudMigrationsMigrationPlan#display_name}.

---

##### `migrationId`<sup>Required</sup> <a name="migrationId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.migrationId"></a>

```java
public java.lang.String getMigrationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#migration_id CloudMigrationsMigrationPlan#migration_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#defined_tags CloudMigrationsMigrationPlan#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#freeform_tags CloudMigrationsMigrationPlan#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#id CloudMigrationsMigrationPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceMigrationPlanId`<sup>Optional</sup> <a name="sourceMigrationPlanId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.sourceMigrationPlanId"></a>

```java
public java.lang.String getSourceMigrationPlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#source_migration_plan_id CloudMigrationsMigrationPlan#source_migration_plan_id}.

---

##### `strategies`<sup>Optional</sup> <a name="strategies" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.strategies"></a>

```java
public java.lang.Object getStrategies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>>

strategies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#strategies CloudMigrationsMigrationPlan#strategies}

---

##### `targetEnvironments`<sup>Optional</sup> <a name="targetEnvironments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.targetEnvironments"></a>

```java
public java.lang.Object getTargetEnvironments();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>>

target_environments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#target_environments CloudMigrationsMigrationPlan#target_environments}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.timeouts"></a>

```java
public CloudMigrationsMigrationPlanTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#timeouts CloudMigrationsMigrationPlan#timeouts}

---

### CloudMigrationsMigrationPlanMigrationPlanStats <a name="CloudMigrationsMigrationPlanMigrationPlanStats" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStats.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStats;

CloudMigrationsMigrationPlanMigrationPlanStats.builder()
    .build();
```


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost;

CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost.builder()
    .build();
```


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute;

CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute.builder()
    .build();
```


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage;

CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage.builder()
    .build();
```


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage;

CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage.builder()
    .build();
```


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes;

CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes.builder()
    .build();
```


### CloudMigrationsMigrationPlanStrategies <a name="CloudMigrationsMigrationPlanStrategies" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanStrategies;

CloudMigrationsMigrationPlanStrategies.builder()
    .resourceType(java.lang.String)
    .strategyType(java.lang.String)
//  .adjustmentMultiplier(java.lang.Number)
//  .metricTimeWindow(java.lang.String)
//  .metricType(java.lang.String)
//  .percentile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#resource_type CloudMigrationsMigrationPlan#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.strategyType">strategyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#strategy_type CloudMigrationsMigrationPlan#strategy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.adjustmentMultiplier">adjustmentMultiplier</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#adjustment_multiplier CloudMigrationsMigrationPlan#adjustment_multiplier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.metricTimeWindow">metricTimeWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#metric_time_window CloudMigrationsMigrationPlan#metric_time_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.metricType">metricType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#metric_type CloudMigrationsMigrationPlan#metric_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.percentile">percentile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#percentile CloudMigrationsMigrationPlan#percentile}. |

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#resource_type CloudMigrationsMigrationPlan#resource_type}.

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.strategyType"></a>

```java
public java.lang.String getStrategyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#strategy_type CloudMigrationsMigrationPlan#strategy_type}.

---

##### `adjustmentMultiplier`<sup>Optional</sup> <a name="adjustmentMultiplier" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.adjustmentMultiplier"></a>

```java
public java.lang.Number getAdjustmentMultiplier();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#adjustment_multiplier CloudMigrationsMigrationPlan#adjustment_multiplier}.

---

##### `metricTimeWindow`<sup>Optional</sup> <a name="metricTimeWindow" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.metricTimeWindow"></a>

```java
public java.lang.String getMetricTimeWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#metric_time_window CloudMigrationsMigrationPlan#metric_time_window}.

---

##### `metricType`<sup>Optional</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#metric_type CloudMigrationsMigrationPlan#metric_type}.

---

##### `percentile`<sup>Optional</sup> <a name="percentile" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.percentile"></a>

```java
public java.lang.String getPercentile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#percentile CloudMigrationsMigrationPlan#percentile}.

---

### CloudMigrationsMigrationPlanTargetEnvironments <a name="CloudMigrationsMigrationPlanTargetEnvironments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanTargetEnvironments;

CloudMigrationsMigrationPlanTargetEnvironments.builder()
    .subnet(java.lang.String)
    .targetEnvironmentType(java.lang.String)
    .vcn(java.lang.String)
//  .availabilityDomain(java.lang.String)
//  .dedicatedVmHost(java.lang.String)
//  .faultDomain(java.lang.String)
//  .msLicense(java.lang.String)
//  .preferredShapeType(java.lang.String)
//  .targetCompartmentId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.subnet">subnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#subnet CloudMigrationsMigrationPlan#subnet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.targetEnvironmentType">targetEnvironmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#target_environment_type CloudMigrationsMigrationPlan#target_environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.vcn">vcn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#vcn CloudMigrationsMigrationPlan#vcn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#availability_domain CloudMigrationsMigrationPlan#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.dedicatedVmHost">dedicatedVmHost</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#dedicated_vm_host CloudMigrationsMigrationPlan#dedicated_vm_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#fault_domain CloudMigrationsMigrationPlan#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.msLicense">msLicense</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#ms_license CloudMigrationsMigrationPlan#ms_license}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.preferredShapeType">preferredShapeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#preferred_shape_type CloudMigrationsMigrationPlan#preferred_shape_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.targetCompartmentId">targetCompartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#target_compartment_id CloudMigrationsMigrationPlan#target_compartment_id}. |

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#subnet CloudMigrationsMigrationPlan#subnet}.

---

##### `targetEnvironmentType`<sup>Required</sup> <a name="targetEnvironmentType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.targetEnvironmentType"></a>

```java
public java.lang.String getTargetEnvironmentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#target_environment_type CloudMigrationsMigrationPlan#target_environment_type}.

---

##### `vcn`<sup>Required</sup> <a name="vcn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.vcn"></a>

```java
public java.lang.String getVcn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#vcn CloudMigrationsMigrationPlan#vcn}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#availability_domain CloudMigrationsMigrationPlan#availability_domain}.

---

##### `dedicatedVmHost`<sup>Optional</sup> <a name="dedicatedVmHost" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.dedicatedVmHost"></a>

```java
public java.lang.String getDedicatedVmHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#dedicated_vm_host CloudMigrationsMigrationPlan#dedicated_vm_host}.

---

##### `faultDomain`<sup>Optional</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#fault_domain CloudMigrationsMigrationPlan#fault_domain}.

---

##### `msLicense`<sup>Optional</sup> <a name="msLicense" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.msLicense"></a>

```java
public java.lang.String getMsLicense();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#ms_license CloudMigrationsMigrationPlan#ms_license}.

---

##### `preferredShapeType`<sup>Optional</sup> <a name="preferredShapeType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.preferredShapeType"></a>

```java
public java.lang.String getPreferredShapeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#preferred_shape_type CloudMigrationsMigrationPlan#preferred_shape_type}.

---

##### `targetCompartmentId`<sup>Optional</sup> <a name="targetCompartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.targetCompartmentId"></a>

```java
public java.lang.String getTargetCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#target_compartment_id CloudMigrationsMigrationPlan#target_compartment_id}.

---

### CloudMigrationsMigrationPlanTimeouts <a name="CloudMigrationsMigrationPlanTimeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanTimeouts;

CloudMigrationsMigrationPlanTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#create CloudMigrationsMigrationPlan#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#delete CloudMigrationsMigrationPlan#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#update CloudMigrationsMigrationPlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#create CloudMigrationsMigrationPlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#delete CloudMigrationsMigrationPlan#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#update CloudMigrationsMigrationPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudMigrationsMigrationPlanMigrationPlanStatsList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStatsList;

new CloudMigrationsMigrationPlanMigrationPlanStatsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.get"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference;

new CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.totalEstimatedCost">totalEstimatedCost</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.vmCount">vmCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStats">CloudMigrationsMigrationPlanMigrationPlanStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `totalEstimatedCost`<sup>Required</sup> <a name="totalEstimatedCost" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.totalEstimatedCost"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList getTotalEstimatedCost();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList</a>

---

##### `vmCount`<sup>Required</sup> <a name="vmCount" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.vmCount"></a>

```java
public java.lang.Number getVmCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.internalValue"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStats getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStats">CloudMigrationsMigrationPlanMigrationPlanStats</a>

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList;

new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.get"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference;

new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount">gpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour">gpuPerHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription">gpuPerHourBySubscription</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb">memoryAmountGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour">memoryGbPerHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription">memoryGbPerHourBySubscription</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount">ocpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour">ocpuPerHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription">ocpuPerHourBySubscription</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour">totalPerHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription">totalPerHourBySubscription</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gpuCount`<sup>Required</sup> <a name="gpuCount" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount"></a>

```java
public java.lang.Number getGpuCount();
```

- *Type:* java.lang.Number

---

##### `gpuPerHour`<sup>Required</sup> <a name="gpuPerHour" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour"></a>

```java
public java.lang.Number getGpuPerHour();
```

- *Type:* java.lang.Number

---

##### `gpuPerHourBySubscription`<sup>Required</sup> <a name="gpuPerHourBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription"></a>

```java
public java.lang.Number getGpuPerHourBySubscription();
```

- *Type:* java.lang.Number

---

##### `memoryAmountGb`<sup>Required</sup> <a name="memoryAmountGb" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb"></a>

```java
public java.lang.Number getMemoryAmountGb();
```

- *Type:* java.lang.Number

---

##### `memoryGbPerHour`<sup>Required</sup> <a name="memoryGbPerHour" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour"></a>

```java
public java.lang.Number getMemoryGbPerHour();
```

- *Type:* java.lang.Number

---

##### `memoryGbPerHourBySubscription`<sup>Required</sup> <a name="memoryGbPerHourBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription"></a>

```java
public java.lang.Number getMemoryGbPerHourBySubscription();
```

- *Type:* java.lang.Number

---

##### `ocpuCount`<sup>Required</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount"></a>

```java
public java.lang.Number getOcpuCount();
```

- *Type:* java.lang.Number

---

##### `ocpuPerHour`<sup>Required</sup> <a name="ocpuPerHour" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour"></a>

```java
public java.lang.Number getOcpuPerHour();
```

- *Type:* java.lang.Number

---

##### `ocpuPerHourBySubscription`<sup>Required</sup> <a name="ocpuPerHourBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription"></a>

```java
public java.lang.Number getOcpuPerHourBySubscription();
```

- *Type:* java.lang.Number

---

##### `totalPerHour`<sup>Required</sup> <a name="totalPerHour" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour"></a>

```java
public java.lang.Number getTotalPerHour();
```

- *Type:* java.lang.Number

---

##### `totalPerHourBySubscription`<sup>Required</sup> <a name="totalPerHourBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription"></a>

```java
public java.lang.Number getTotalPerHourBySubscription();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute</a>

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList;

new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.get"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList;

new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.get"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference;

new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour">totalPerHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription">totalPerHourBySubscription</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `totalPerHour`<sup>Required</sup> <a name="totalPerHour" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour"></a>

```java
public java.lang.Number getTotalPerHour();
```

- *Type:* java.lang.Number

---

##### `totalPerHourBySubscription`<sup>Required</sup> <a name="totalPerHourBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription"></a>

```java
public java.lang.Number getTotalPerHourBySubscription();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage</a>

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference;

new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage">osImage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage">storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth">totalEstimationPerMonth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription">totalEstimationPerMonthBySubscription</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compute`<sup>Required</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList getCompute();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList</a>

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

---

##### `osImage`<sup>Required</sup> <a name="osImage" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList getOsImage();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList getStorage();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList</a>

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `totalEstimationPerMonth`<sup>Required</sup> <a name="totalEstimationPerMonth" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth"></a>

```java
public java.lang.Number getTotalEstimationPerMonth();
```

- *Type:* java.lang.Number

---

##### `totalEstimationPerMonthBySubscription`<sup>Required</sup> <a name="totalEstimationPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription"></a>

```java
public java.lang.Number getTotalEstimationPerMonthBySubscription();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost</a>

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList;

new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.get"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference;

new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth">totalGbPerMonth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription">totalGbPerMonthBySubscription</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes">volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `totalGbPerMonth`<sup>Required</sup> <a name="totalGbPerMonth" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth"></a>

```java
public java.lang.Number getTotalGbPerMonth();
```

- *Type:* java.lang.Number

---

##### `totalGbPerMonthBySubscription`<sup>Required</sup> <a name="totalGbPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription"></a>

```java
public java.lang.Number getTotalGbPerMonthBySubscription();
```

- *Type:* java.lang.Number

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList getVolumes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage</a>

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList;

new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference;

new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb">capacityGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth">totalGbPerMonth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription">totalGbPerMonthBySubscription</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityGb`<sup>Required</sup> <a name="capacityGb" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb"></a>

```java
public java.lang.Number getCapacityGb();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `totalGbPerMonth`<sup>Required</sup> <a name="totalGbPerMonth" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth"></a>

```java
public java.lang.Number getTotalGbPerMonth();
```

- *Type:* java.lang.Number

---

##### `totalGbPerMonthBySubscription`<sup>Required</sup> <a name="totalGbPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription"></a>

```java
public java.lang.Number getTotalGbPerMonthBySubscription();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue"></a>

```java
public CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes</a>

---


### CloudMigrationsMigrationPlanStrategiesList <a name="CloudMigrationsMigrationPlanStrategiesList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanStrategiesList;

new CloudMigrationsMigrationPlanStrategiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.get"></a>

```java
public CloudMigrationsMigrationPlanStrategiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>>

---


### CloudMigrationsMigrationPlanStrategiesOutputReference <a name="CloudMigrationsMigrationPlanStrategiesOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanStrategiesOutputReference;

new CloudMigrationsMigrationPlanStrategiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetAdjustmentMultiplier">resetAdjustmentMultiplier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetMetricTimeWindow">resetMetricTimeWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetMetricType">resetMetricType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetPercentile">resetPercentile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdjustmentMultiplier` <a name="resetAdjustmentMultiplier" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetAdjustmentMultiplier"></a>

```java
public void resetAdjustmentMultiplier()
```

##### `resetMetricTimeWindow` <a name="resetMetricTimeWindow" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetMetricTimeWindow"></a>

```java
public void resetMetricTimeWindow()
```

##### `resetMetricType` <a name="resetMetricType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetMetricType"></a>

```java
public void resetMetricType()
```

##### `resetPercentile` <a name="resetPercentile" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetPercentile"></a>

```java
public void resetPercentile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.adjustmentMultiplierInput">adjustmentMultiplierInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTimeWindowInput">metricTimeWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTypeInput">metricTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.percentileInput">percentileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.strategyTypeInput">strategyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.adjustmentMultiplier">adjustmentMultiplier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTimeWindow">metricTimeWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricType">metricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.percentile">percentile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.strategyType">strategyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adjustmentMultiplierInput`<sup>Optional</sup> <a name="adjustmentMultiplierInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.adjustmentMultiplierInput"></a>

```java
public java.lang.Number getAdjustmentMultiplierInput();
```

- *Type:* java.lang.Number

---

##### `metricTimeWindowInput`<sup>Optional</sup> <a name="metricTimeWindowInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTimeWindowInput"></a>

```java
public java.lang.String getMetricTimeWindowInput();
```

- *Type:* java.lang.String

---

##### `metricTypeInput`<sup>Optional</sup> <a name="metricTypeInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTypeInput"></a>

```java
public java.lang.String getMetricTypeInput();
```

- *Type:* java.lang.String

---

##### `percentileInput`<sup>Optional</sup> <a name="percentileInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.percentileInput"></a>

```java
public java.lang.String getPercentileInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `strategyTypeInput`<sup>Optional</sup> <a name="strategyTypeInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.strategyTypeInput"></a>

```java
public java.lang.String getStrategyTypeInput();
```

- *Type:* java.lang.String

---

##### `adjustmentMultiplier`<sup>Required</sup> <a name="adjustmentMultiplier" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.adjustmentMultiplier"></a>

```java
public java.lang.Number getAdjustmentMultiplier();
```

- *Type:* java.lang.Number

---

##### `metricTimeWindow`<sup>Required</sup> <a name="metricTimeWindow" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTimeWindow"></a>

```java
public java.lang.String getMetricTimeWindow();
```

- *Type:* java.lang.String

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

---

##### `percentile`<sup>Required</sup> <a name="percentile" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.percentile"></a>

```java
public java.lang.String getPercentile();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.strategyType"></a>

```java
public java.lang.String getStrategyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>

---


### CloudMigrationsMigrationPlanTargetEnvironmentsList <a name="CloudMigrationsMigrationPlanTargetEnvironmentsList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanTargetEnvironmentsList;

new CloudMigrationsMigrationPlanTargetEnvironmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.get"></a>

```java
public CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>>

---


### CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference <a name="CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference;

new CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetDedicatedVmHost">resetDedicatedVmHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetFaultDomain">resetFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetMsLicense">resetMsLicense</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetPreferredShapeType">resetPreferredShapeType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetTargetCompartmentId">resetTargetCompartmentId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetDedicatedVmHost` <a name="resetDedicatedVmHost" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetDedicatedVmHost"></a>

```java
public void resetDedicatedVmHost()
```

##### `resetFaultDomain` <a name="resetFaultDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetFaultDomain"></a>

```java
public void resetFaultDomain()
```

##### `resetMsLicense` <a name="resetMsLicense" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetMsLicense"></a>

```java
public void resetMsLicense()
```

##### `resetPreferredShapeType` <a name="resetPreferredShapeType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetPreferredShapeType"></a>

```java
public void resetPreferredShapeType()
```

##### `resetTargetCompartmentId` <a name="resetTargetCompartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetTargetCompartmentId"></a>

```java
public void resetTargetCompartmentId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.dedicatedVmHostInput">dedicatedVmHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.faultDomainInput">faultDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.msLicenseInput">msLicenseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.preferredShapeTypeInput">preferredShapeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.subnetInput">subnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetCompartmentIdInput">targetCompartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetEnvironmentTypeInput">targetEnvironmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.vcnInput">vcnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.dedicatedVmHost">dedicatedVmHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.msLicense">msLicense</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.preferredShapeType">preferredShapeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.subnet">subnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetCompartmentId">targetCompartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetEnvironmentType">targetEnvironmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.vcn">vcn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `dedicatedVmHostInput`<sup>Optional</sup> <a name="dedicatedVmHostInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.dedicatedVmHostInput"></a>

```java
public java.lang.String getDedicatedVmHostInput();
```

- *Type:* java.lang.String

---

##### `faultDomainInput`<sup>Optional</sup> <a name="faultDomainInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.faultDomainInput"></a>

```java
public java.lang.String getFaultDomainInput();
```

- *Type:* java.lang.String

---

##### `msLicenseInput`<sup>Optional</sup> <a name="msLicenseInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.msLicenseInput"></a>

```java
public java.lang.String getMsLicenseInput();
```

- *Type:* java.lang.String

---

##### `preferredShapeTypeInput`<sup>Optional</sup> <a name="preferredShapeTypeInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.preferredShapeTypeInput"></a>

```java
public java.lang.String getPreferredShapeTypeInput();
```

- *Type:* java.lang.String

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.subnetInput"></a>

```java
public java.lang.String getSubnetInput();
```

- *Type:* java.lang.String

---

##### `targetCompartmentIdInput`<sup>Optional</sup> <a name="targetCompartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetCompartmentIdInput"></a>

```java
public java.lang.String getTargetCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `targetEnvironmentTypeInput`<sup>Optional</sup> <a name="targetEnvironmentTypeInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetEnvironmentTypeInput"></a>

```java
public java.lang.String getTargetEnvironmentTypeInput();
```

- *Type:* java.lang.String

---

##### `vcnInput`<sup>Optional</sup> <a name="vcnInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.vcnInput"></a>

```java
public java.lang.String getVcnInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `dedicatedVmHost`<sup>Required</sup> <a name="dedicatedVmHost" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.dedicatedVmHost"></a>

```java
public java.lang.String getDedicatedVmHost();
```

- *Type:* java.lang.String

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

---

##### `msLicense`<sup>Required</sup> <a name="msLicense" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.msLicense"></a>

```java
public java.lang.String getMsLicense();
```

- *Type:* java.lang.String

---

##### `preferredShapeType`<sup>Required</sup> <a name="preferredShapeType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.preferredShapeType"></a>

```java
public java.lang.String getPreferredShapeType();
```

- *Type:* java.lang.String

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

---

##### `targetCompartmentId`<sup>Required</sup> <a name="targetCompartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetCompartmentId"></a>

```java
public java.lang.String getTargetCompartmentId();
```

- *Type:* java.lang.String

---

##### `targetEnvironmentType`<sup>Required</sup> <a name="targetEnvironmentType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetEnvironmentType"></a>

```java
public java.lang.String getTargetEnvironmentType();
```

- *Type:* java.lang.String

---

##### `vcn`<sup>Required</sup> <a name="vcn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.vcn"></a>

```java
public java.lang.String getVcn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>

---


### CloudMigrationsMigrationPlanTimeoutsOutputReference <a name="CloudMigrationsMigrationPlanTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_migrations_migration_plan.CloudMigrationsMigrationPlanTimeoutsOutputReference;

new CloudMigrationsMigrationPlanTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a>

---



