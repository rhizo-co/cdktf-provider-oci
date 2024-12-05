# `dataOciCloudMigrationsMigrationPlans` Submodule <a name="`dataOciCloudMigrationsMigrationPlans` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudMigrationsMigrationPlans <a name="DataOciCloudMigrationsMigrationPlans" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans oci_cloud_migrations_migration_plans}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlans;

DataOciCloudMigrationsMigrationPlans.Builder.create(Construct scope, java.lang.String id)
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
//  .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCloudMigrationsMigrationPlansFilter>)
//  .id(java.lang.String)
//  .migrationId(java.lang.String)
//  .migrationPlanId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#compartment_id DataOciCloudMigrationsMigrationPlans#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#display_name DataOciCloudMigrationsMigrationPlans#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#id DataOciCloudMigrationsMigrationPlans#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.migrationId">migrationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_id DataOciCloudMigrationsMigrationPlans#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.migrationPlanId">migrationPlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_plan_id DataOciCloudMigrationsMigrationPlans#migration_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#state DataOciCloudMigrationsMigrationPlans#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#compartment_id DataOciCloudMigrationsMigrationPlans#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#display_name DataOciCloudMigrationsMigrationPlans#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#filter DataOciCloudMigrationsMigrationPlans#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#id DataOciCloudMigrationsMigrationPlans#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `migrationId`<sup>Optional</sup> <a name="migrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.migrationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_id DataOciCloudMigrationsMigrationPlans#migration_id}.

---

##### `migrationPlanId`<sup>Optional</sup> <a name="migrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.migrationPlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_plan_id DataOciCloudMigrationsMigrationPlans#migration_plan_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#state DataOciCloudMigrationsMigrationPlans#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetMigrationId">resetMigrationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetMigrationPlanId">resetMigrationPlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCloudMigrationsMigrationPlansFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetId"></a>

```java
public void resetId()
```

##### `resetMigrationId` <a name="resetMigrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetMigrationId"></a>

```java
public void resetMigrationId()
```

##### `resetMigrationPlanId` <a name="resetMigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetMigrationPlanId"></a>

```java
public void resetMigrationPlanId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlans resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlans;

DataOciCloudMigrationsMigrationPlans.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlans;

DataOciCloudMigrationsMigrationPlans.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlans;

DataOciCloudMigrationsMigrationPlans.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlans;

DataOciCloudMigrationsMigrationPlans.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCloudMigrationsMigrationPlans.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlans resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCloudMigrationsMigrationPlans to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCloudMigrationsMigrationPlans that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudMigrationsMigrationPlans to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList">DataOciCloudMigrationsMigrationPlansFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanCollection">migrationPlanCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationIdInput">migrationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanIdInput">migrationPlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationId">migrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanId">migrationPlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.filter"></a>

```java
public DataOciCloudMigrationsMigrationPlansFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList">DataOciCloudMigrationsMigrationPlansFilterList</a>

---

##### `migrationPlanCollection`<sup>Required</sup> <a name="migrationPlanCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanCollection"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList getMigrationPlanCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `migrationIdInput`<sup>Optional</sup> <a name="migrationIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationIdInput"></a>

```java
public java.lang.String getMigrationIdInput();
```

- *Type:* java.lang.String

---

##### `migrationPlanIdInput`<sup>Optional</sup> <a name="migrationPlanIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanIdInput"></a>

```java
public java.lang.String getMigrationPlanIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `migrationId`<sup>Required</sup> <a name="migrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationId"></a>

```java
public java.lang.String getMigrationId();
```

- *Type:* java.lang.String

---

##### `migrationPlanId`<sup>Required</sup> <a name="migrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanId"></a>

```java
public java.lang.String getMigrationPlanId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudMigrationsMigrationPlansConfig <a name="DataOciCloudMigrationsMigrationPlansConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansConfig;

DataOciCloudMigrationsMigrationPlansConfig.builder()
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
//  .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCloudMigrationsMigrationPlansFilter>)
//  .id(java.lang.String)
//  .migrationId(java.lang.String)
//  .migrationPlanId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#compartment_id DataOciCloudMigrationsMigrationPlans#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#display_name DataOciCloudMigrationsMigrationPlans#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#id DataOciCloudMigrationsMigrationPlans#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.migrationId">migrationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_id DataOciCloudMigrationsMigrationPlans#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.migrationPlanId">migrationPlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_plan_id DataOciCloudMigrationsMigrationPlans#migration_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#state DataOciCloudMigrationsMigrationPlans#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#compartment_id DataOciCloudMigrationsMigrationPlans#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#display_name DataOciCloudMigrationsMigrationPlans#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#filter DataOciCloudMigrationsMigrationPlans#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#id DataOciCloudMigrationsMigrationPlans#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `migrationId`<sup>Optional</sup> <a name="migrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.migrationId"></a>

```java
public java.lang.String getMigrationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_id DataOciCloudMigrationsMigrationPlans#migration_id}.

---

##### `migrationPlanId`<sup>Optional</sup> <a name="migrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.migrationPlanId"></a>

```java
public java.lang.String getMigrationPlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_plan_id DataOciCloudMigrationsMigrationPlans#migration_plan_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#state DataOciCloudMigrationsMigrationPlans#state}.

---

### DataOciCloudMigrationsMigrationPlansFilter <a name="DataOciCloudMigrationsMigrationPlansFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansFilter;

DataOciCloudMigrationsMigrationPlansFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#name DataOciCloudMigrationsMigrationPlans#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#values DataOciCloudMigrationsMigrationPlans#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#regex DataOciCloudMigrationsMigrationPlans#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#name DataOciCloudMigrationsMigrationPlans#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#values DataOciCloudMigrationsMigrationPlans#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#regex DataOciCloudMigrationsMigrationPlans#regex}.

---

### DataOciCloudMigrationsMigrationPlansMigrationPlanCollection <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection;

DataOciCloudMigrationsMigrationPlansMigrationPlanCollection.builder()
    .build();
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems;

DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems.builder()
    .build();
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats;

DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats.builder()
    .build();
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost;

DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost.builder()
    .build();
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute;

DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute.builder()
    .build();
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage;

DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage.builder()
    .build();
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage;

DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage.builder()
    .build();
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes;

DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes.builder()
    .build();
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies;

DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies.builder()
    .build();
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments;

DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudMigrationsMigrationPlansFilterList <a name="DataOciCloudMigrationsMigrationPlansFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansFilterList;

new DataOciCloudMigrationsMigrationPlansFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.get"></a>

```java
public DataOciCloudMigrationsMigrationPlansFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>>

---


### DataOciCloudMigrationsMigrationPlansFilterOutputReference <a name="DataOciCloudMigrationsMigrationPlansFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansFilterOutputReference;

new DataOciCloudMigrationsMigrationPlansFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.get"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.get"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.totalEstimatedCost">totalEstimatedCost</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.vmCount">vmCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `totalEstimatedCost`<sup>Required</sup> <a name="totalEstimatedCost" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.totalEstimatedCost"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList getTotalEstimatedCost();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList</a>

---

##### `vmCount`<sup>Required</sup> <a name="vmCount" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.vmCount"></a>

```java
public java.lang.Number getVmCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.internalValue"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.get"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount">gpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour">gpuPerHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription">gpuPerHourBySubscription</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb">memoryAmountGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour">memoryGbPerHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription">memoryGbPerHourBySubscription</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount">ocpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour">ocpuPerHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription">ocpuPerHourBySubscription</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour">totalPerHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription">totalPerHourBySubscription</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gpuCount`<sup>Required</sup> <a name="gpuCount" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount"></a>

```java
public java.lang.Number getGpuCount();
```

- *Type:* java.lang.Number

---

##### `gpuPerHour`<sup>Required</sup> <a name="gpuPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour"></a>

```java
public java.lang.Number getGpuPerHour();
```

- *Type:* java.lang.Number

---

##### `gpuPerHourBySubscription`<sup>Required</sup> <a name="gpuPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription"></a>

```java
public java.lang.Number getGpuPerHourBySubscription();
```

- *Type:* java.lang.Number

---

##### `memoryAmountGb`<sup>Required</sup> <a name="memoryAmountGb" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb"></a>

```java
public java.lang.Number getMemoryAmountGb();
```

- *Type:* java.lang.Number

---

##### `memoryGbPerHour`<sup>Required</sup> <a name="memoryGbPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour"></a>

```java
public java.lang.Number getMemoryGbPerHour();
```

- *Type:* java.lang.Number

---

##### `memoryGbPerHourBySubscription`<sup>Required</sup> <a name="memoryGbPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription"></a>

```java
public java.lang.Number getMemoryGbPerHourBySubscription();
```

- *Type:* java.lang.Number

---

##### `ocpuCount`<sup>Required</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount"></a>

```java
public java.lang.Number getOcpuCount();
```

- *Type:* java.lang.Number

---

##### `ocpuPerHour`<sup>Required</sup> <a name="ocpuPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour"></a>

```java
public java.lang.Number getOcpuPerHour();
```

- *Type:* java.lang.Number

---

##### `ocpuPerHourBySubscription`<sup>Required</sup> <a name="ocpuPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription"></a>

```java
public java.lang.Number getOcpuPerHourBySubscription();
```

- *Type:* java.lang.Number

---

##### `totalPerHour`<sup>Required</sup> <a name="totalPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour"></a>

```java
public java.lang.Number getTotalPerHour();
```

- *Type:* java.lang.Number

---

##### `totalPerHourBySubscription`<sup>Required</sup> <a name="totalPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription"></a>

```java
public java.lang.Number getTotalPerHourBySubscription();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.get"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.get"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour">totalPerHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription">totalPerHourBySubscription</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `totalPerHour`<sup>Required</sup> <a name="totalPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour"></a>

```java
public java.lang.Number getTotalPerHour();
```

- *Type:* java.lang.Number

---

##### `totalPerHourBySubscription`<sup>Required</sup> <a name="totalPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription"></a>

```java
public java.lang.Number getTotalPerHourBySubscription();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage">osImage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage">storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth">totalEstimationPerMonth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription">totalEstimationPerMonthBySubscription</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compute`<sup>Required</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList getCompute();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList</a>

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

---

##### `osImage`<sup>Required</sup> <a name="osImage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList getOsImage();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList getStorage();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList</a>

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `totalEstimationPerMonth`<sup>Required</sup> <a name="totalEstimationPerMonth" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth"></a>

```java
public java.lang.Number getTotalEstimationPerMonth();
```

- *Type:* java.lang.Number

---

##### `totalEstimationPerMonthBySubscription`<sup>Required</sup> <a name="totalEstimationPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription"></a>

```java
public java.lang.Number getTotalEstimationPerMonthBySubscription();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.get"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth">totalGbPerMonth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription">totalGbPerMonthBySubscription</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes">volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `totalGbPerMonth`<sup>Required</sup> <a name="totalGbPerMonth" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth"></a>

```java
public java.lang.Number getTotalGbPerMonth();
```

- *Type:* java.lang.Number

---

##### `totalGbPerMonthBySubscription`<sup>Required</sup> <a name="totalGbPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription"></a>

```java
public java.lang.Number getTotalGbPerMonthBySubscription();
```

- *Type:* java.lang.Number

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList getVolumes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb">capacityGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth">totalGbPerMonth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription">totalGbPerMonthBySubscription</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityGb`<sup>Required</sup> <a name="capacityGb" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb"></a>

```java
public java.lang.Number getCapacityGb();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `totalGbPerMonth`<sup>Required</sup> <a name="totalGbPerMonth" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth"></a>

```java
public java.lang.Number getTotalGbPerMonth();
```

- *Type:* java.lang.Number

---

##### `totalGbPerMonthBySubscription`<sup>Required</sup> <a name="totalGbPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription"></a>

```java
public java.lang.Number getTotalGbPerMonthBySubscription();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.calculatedLimits">calculatedLimits</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.migrationId">migrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.migrationPlanStats">migrationPlanStats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.referenceToRmsStack">referenceToRmsStack</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.sourceMigrationPlanId">sourceMigrationPlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.strategies">strategies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.targetEnvironments">targetEnvironments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `calculatedLimits`<sup>Required</sup> <a name="calculatedLimits" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.calculatedLimits"></a>

```java
public StringMap getCalculatedLimits();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `migrationId`<sup>Required</sup> <a name="migrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.migrationId"></a>

```java
public java.lang.String getMigrationId();
```

- *Type:* java.lang.String

---

##### `migrationPlanStats`<sup>Required</sup> <a name="migrationPlanStats" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.migrationPlanStats"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList getMigrationPlanStats();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList</a>

---

##### `referenceToRmsStack`<sup>Required</sup> <a name="referenceToRmsStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.referenceToRmsStack"></a>

```java
public java.lang.String getReferenceToRmsStack();
```

- *Type:* java.lang.String

---

##### `sourceMigrationPlanId`<sup>Required</sup> <a name="sourceMigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.sourceMigrationPlanId"></a>

```java
public java.lang.String getSourceMigrationPlanId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `strategies`<sup>Required</sup> <a name="strategies" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.strategies"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList getStrategies();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `targetEnvironments`<sup>Required</sup> <a name="targetEnvironments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.targetEnvironments"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList getTargetEnvironments();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.get"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.adjustmentMultiplier">adjustmentMultiplier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.metricTimeWindow">metricTimeWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.metricType">metricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.percentile">percentile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.strategyType">strategyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adjustmentMultiplier`<sup>Required</sup> <a name="adjustmentMultiplier" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.adjustmentMultiplier"></a>

```java
public java.lang.Number getAdjustmentMultiplier();
```

- *Type:* java.lang.Number

---

##### `metricTimeWindow`<sup>Required</sup> <a name="metricTimeWindow" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.metricTimeWindow"></a>

```java
public java.lang.String getMetricTimeWindow();
```

- *Type:* java.lang.String

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

---

##### `percentile`<sup>Required</sup> <a name="percentile" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.percentile"></a>

```java
public java.lang.String getPercentile();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.strategyType"></a>

```java
public java.lang.String getStrategyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.internalValue"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.get"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.dedicatedVmHost">dedicatedVmHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.msLicense">msLicense</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.preferredShapeType">preferredShapeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.subnet">subnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.targetCompartmentId">targetCompartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.targetEnvironmentType">targetEnvironmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.vcn">vcn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `dedicatedVmHost`<sup>Required</sup> <a name="dedicatedVmHost" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.dedicatedVmHost"></a>

```java
public java.lang.String getDedicatedVmHost();
```

- *Type:* java.lang.String

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

---

##### `msLicense`<sup>Required</sup> <a name="msLicense" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.msLicense"></a>

```java
public java.lang.String getMsLicense();
```

- *Type:* java.lang.String

---

##### `preferredShapeType`<sup>Required</sup> <a name="preferredShapeType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.preferredShapeType"></a>

```java
public java.lang.String getPreferredShapeType();
```

- *Type:* java.lang.String

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

---

##### `targetCompartmentId`<sup>Required</sup> <a name="targetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.targetCompartmentId"></a>

```java
public java.lang.String getTargetCompartmentId();
```

- *Type:* java.lang.String

---

##### `targetEnvironmentType`<sup>Required</sup> <a name="targetEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.targetEnvironmentType"></a>

```java
public java.lang.String getTargetEnvironmentType();
```

- *Type:* java.lang.String

---

##### `vcn`<sup>Required</sup> <a name="vcn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.vcn"></a>

```java
public java.lang.String getVcn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.internalValue"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.get"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_migrations_migration_plans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference;

new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection">DataOciCloudMigrationsMigrationPlansMigrationPlanCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.items"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.internalValue"></a>

```java
public DataOciCloudMigrationsMigrationPlansMigrationPlanCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection">DataOciCloudMigrationsMigrationPlansMigrationPlanCollection</a>

---



