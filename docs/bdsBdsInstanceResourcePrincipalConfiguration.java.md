# `bdsBdsInstanceResourcePrincipalConfiguration` Submodule <a name="`bdsBdsInstanceResourcePrincipalConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstanceResourcePrincipalConfiguration <a name="BdsBdsInstanceResourcePrincipalConfiguration" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration oci_bds_bds_instance_resource_principal_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_resource_principal_configuration.BdsBdsInstanceResourcePrincipalConfiguration;

BdsBdsInstanceResourcePrincipalConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .bdsInstanceId(java.lang.String)
    .clusterAdminPassword(java.lang.String)
    .displayName(java.lang.String)
//  .forceRefreshResourcePrincipalTrigger(java.lang.Number)
//  .id(java.lang.String)
//  .sessionTokenLifeSpanDurationInHours(java.lang.Number)
//  .timeouts(BdsBdsInstanceResourcePrincipalConfigurationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#bds_instance_id BdsBdsInstanceResourcePrincipalConfiguration#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.clusterAdminPassword">clusterAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#cluster_admin_password BdsBdsInstanceResourcePrincipalConfiguration#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#display_name BdsBdsInstanceResourcePrincipalConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.forceRefreshResourcePrincipalTrigger">forceRefreshResourcePrincipalTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#force_refresh_resource_principal_trigger BdsBdsInstanceResourcePrincipalConfiguration#force_refresh_resource_principal_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#id BdsBdsInstanceResourcePrincipalConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.sessionTokenLifeSpanDurationInHours">sessionTokenLifeSpanDurationInHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#session_token_life_span_duration_in_hours BdsBdsInstanceResourcePrincipalConfiguration#session_token_life_span_duration_in_hours}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.bdsInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#bds_instance_id BdsBdsInstanceResourcePrincipalConfiguration#bds_instance_id}.

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.clusterAdminPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#cluster_admin_password BdsBdsInstanceResourcePrincipalConfiguration#cluster_admin_password}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#display_name BdsBdsInstanceResourcePrincipalConfiguration#display_name}.

---

##### `forceRefreshResourcePrincipalTrigger`<sup>Optional</sup> <a name="forceRefreshResourcePrincipalTrigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.forceRefreshResourcePrincipalTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#force_refresh_resource_principal_trigger BdsBdsInstanceResourcePrincipalConfiguration#force_refresh_resource_principal_trigger}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#id BdsBdsInstanceResourcePrincipalConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sessionTokenLifeSpanDurationInHours`<sup>Optional</sup> <a name="sessionTokenLifeSpanDurationInHours" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.sessionTokenLifeSpanDurationInHours"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#session_token_life_span_duration_in_hours BdsBdsInstanceResourcePrincipalConfiguration#session_token_life_span_duration_in_hours}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#timeouts BdsBdsInstanceResourcePrincipalConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetForceRefreshResourcePrincipalTrigger">resetForceRefreshResourcePrincipalTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetSessionTokenLifeSpanDurationInHours">resetSessionTokenLifeSpanDurationInHours</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.putTimeouts"></a>

```java
public void putTimeouts(BdsBdsInstanceResourcePrincipalConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a>

---

##### `resetForceRefreshResourcePrincipalTrigger` <a name="resetForceRefreshResourcePrincipalTrigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetForceRefreshResourcePrincipalTrigger"></a>

```java
public void resetForceRefreshResourcePrincipalTrigger()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetSessionTokenLifeSpanDurationInHours` <a name="resetSessionTokenLifeSpanDurationInHours" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetSessionTokenLifeSpanDurationInHours"></a>

```java
public void resetSessionTokenLifeSpanDurationInHours()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BdsBdsInstanceResourcePrincipalConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_resource_principal_configuration.BdsBdsInstanceResourcePrincipalConfiguration;

BdsBdsInstanceResourcePrincipalConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_resource_principal_configuration.BdsBdsInstanceResourcePrincipalConfiguration;

BdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_resource_principal_configuration.BdsBdsInstanceResourcePrincipalConfiguration;

BdsBdsInstanceResourcePrincipalConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_resource_principal_configuration.BdsBdsInstanceResourcePrincipalConfiguration;

BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BdsBdsInstanceResourcePrincipalConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BdsBdsInstanceResourcePrincipalConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BdsBdsInstanceResourcePrincipalConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstanceResourcePrincipalConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference">BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenExpiry">timeTokenExpiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenRefreshed">timeTokenRefreshed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceIdInput">bdsInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPasswordInput">clusterAdminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTriggerInput">forceRefreshResourcePrincipalTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHoursInput">sessionTokenLifeSpanDurationInHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTrigger">forceRefreshResourcePrincipalTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHours">sessionTokenLifeSpanDurationInHours</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeouts"></a>

```java
public BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference">BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference</a>

---

##### `timeTokenExpiry`<sup>Required</sup> <a name="timeTokenExpiry" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenExpiry"></a>

```java
public java.lang.String getTimeTokenExpiry();
```

- *Type:* java.lang.String

---

##### `timeTokenRefreshed`<sup>Required</sup> <a name="timeTokenRefreshed" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenRefreshed"></a>

```java
public java.lang.String getTimeTokenRefreshed();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `bdsInstanceIdInput`<sup>Optional</sup> <a name="bdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceIdInput"></a>

```java
public java.lang.String getBdsInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `clusterAdminPasswordInput`<sup>Optional</sup> <a name="clusterAdminPasswordInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPasswordInput"></a>

```java
public java.lang.String getClusterAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `forceRefreshResourcePrincipalTriggerInput`<sup>Optional</sup> <a name="forceRefreshResourcePrincipalTriggerInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTriggerInput"></a>

```java
public java.lang.Number getForceRefreshResourcePrincipalTriggerInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `sessionTokenLifeSpanDurationInHoursInput`<sup>Optional</sup> <a name="sessionTokenLifeSpanDurationInHoursInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHoursInput"></a>

```java
public java.lang.Number getSessionTokenLifeSpanDurationInHoursInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a>

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceId"></a>

```java
public java.lang.String getBdsInstanceId();
```

- *Type:* java.lang.String

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPassword"></a>

```java
public java.lang.String getClusterAdminPassword();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `forceRefreshResourcePrincipalTrigger`<sup>Required</sup> <a name="forceRefreshResourcePrincipalTrigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTrigger"></a>

```java
public java.lang.Number getForceRefreshResourcePrincipalTrigger();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `sessionTokenLifeSpanDurationInHours`<sup>Required</sup> <a name="sessionTokenLifeSpanDurationInHours" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHours"></a>

```java
public java.lang.Number getSessionTokenLifeSpanDurationInHours();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstanceResourcePrincipalConfigurationConfig <a name="BdsBdsInstanceResourcePrincipalConfigurationConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_resource_principal_configuration.BdsBdsInstanceResourcePrincipalConfigurationConfig;

BdsBdsInstanceResourcePrincipalConfigurationConfig.builder()
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
    .bdsInstanceId(java.lang.String)
    .clusterAdminPassword(java.lang.String)
    .displayName(java.lang.String)
//  .forceRefreshResourcePrincipalTrigger(java.lang.Number)
//  .id(java.lang.String)
//  .sessionTokenLifeSpanDurationInHours(java.lang.Number)
//  .timeouts(BdsBdsInstanceResourcePrincipalConfigurationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#bds_instance_id BdsBdsInstanceResourcePrincipalConfiguration#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#cluster_admin_password BdsBdsInstanceResourcePrincipalConfiguration#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#display_name BdsBdsInstanceResourcePrincipalConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.forceRefreshResourcePrincipalTrigger">forceRefreshResourcePrincipalTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#force_refresh_resource_principal_trigger BdsBdsInstanceResourcePrincipalConfiguration#force_refresh_resource_principal_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#id BdsBdsInstanceResourcePrincipalConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.sessionTokenLifeSpanDurationInHours">sessionTokenLifeSpanDurationInHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#session_token_life_span_duration_in_hours BdsBdsInstanceResourcePrincipalConfiguration#session_token_life_span_duration_in_hours}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.bdsInstanceId"></a>

```java
public java.lang.String getBdsInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#bds_instance_id BdsBdsInstanceResourcePrincipalConfiguration#bds_instance_id}.

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.clusterAdminPassword"></a>

```java
public java.lang.String getClusterAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#cluster_admin_password BdsBdsInstanceResourcePrincipalConfiguration#cluster_admin_password}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#display_name BdsBdsInstanceResourcePrincipalConfiguration#display_name}.

---

##### `forceRefreshResourcePrincipalTrigger`<sup>Optional</sup> <a name="forceRefreshResourcePrincipalTrigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.forceRefreshResourcePrincipalTrigger"></a>

```java
public java.lang.Number getForceRefreshResourcePrincipalTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#force_refresh_resource_principal_trigger BdsBdsInstanceResourcePrincipalConfiguration#force_refresh_resource_principal_trigger}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#id BdsBdsInstanceResourcePrincipalConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sessionTokenLifeSpanDurationInHours`<sup>Optional</sup> <a name="sessionTokenLifeSpanDurationInHours" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.sessionTokenLifeSpanDurationInHours"></a>

```java
public java.lang.Number getSessionTokenLifeSpanDurationInHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#session_token_life_span_duration_in_hours BdsBdsInstanceResourcePrincipalConfiguration#session_token_life_span_duration_in_hours}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.timeouts"></a>

```java
public BdsBdsInstanceResourcePrincipalConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#timeouts BdsBdsInstanceResourcePrincipalConfiguration#timeouts}

---

### BdsBdsInstanceResourcePrincipalConfigurationTimeouts <a name="BdsBdsInstanceResourcePrincipalConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_resource_principal_configuration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts;

BdsBdsInstanceResourcePrincipalConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#create BdsBdsInstanceResourcePrincipalConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#delete BdsBdsInstanceResourcePrincipalConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#update BdsBdsInstanceResourcePrincipalConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#create BdsBdsInstanceResourcePrincipalConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#delete BdsBdsInstanceResourcePrincipalConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#update BdsBdsInstanceResourcePrincipalConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference <a name="BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_resource_principal_configuration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference;

new BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a>

---



