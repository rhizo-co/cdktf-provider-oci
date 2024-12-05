# `fusionAppsFusionEnvironmentAdminUser` Submodule <a name="`fusionAppsFusionEnvironmentAdminUser` Submodule" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FusionAppsFusionEnvironmentAdminUser <a name="FusionAppsFusionEnvironmentAdminUser" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user oci_fusion_apps_fusion_environment_admin_user}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_admin_user.FusionAppsFusionEnvironmentAdminUser;

FusionAppsFusionEnvironmentAdminUser.Builder.create(Construct scope, java.lang.String id)
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
    .emailAddress(java.lang.String)
    .firstName(java.lang.String)
    .fusionEnvironmentId(java.lang.String)
    .lastName(java.lang.String)
    .username(java.lang.String)
//  .id(java.lang.String)
//  .password(java.lang.String)
//  .timeouts(FusionAppsFusionEnvironmentAdminUserTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#email_address FusionAppsFusionEnvironmentAdminUser#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#first_name FusionAppsFusionEnvironmentAdminUser#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#fusion_environment_id FusionAppsFusionEnvironmentAdminUser#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#last_name FusionAppsFusionEnvironmentAdminUser#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#username FusionAppsFusionEnvironmentAdminUser#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#id FusionAppsFusionEnvironmentAdminUser#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#password FusionAppsFusionEnvironmentAdminUser#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.emailAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#email_address FusionAppsFusionEnvironmentAdminUser#email_address}.

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.firstName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#first_name FusionAppsFusionEnvironmentAdminUser#first_name}.

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.fusionEnvironmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#fusion_environment_id FusionAppsFusionEnvironmentAdminUser#fusion_environment_id}.

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.lastName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#last_name FusionAppsFusionEnvironmentAdminUser#last_name}.

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#username FusionAppsFusionEnvironmentAdminUser#username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#id FusionAppsFusionEnvironmentAdminUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#password FusionAppsFusionEnvironmentAdminUser#password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#timeouts FusionAppsFusionEnvironmentAdminUser#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.putTimeouts"></a>

```java
public void putTimeouts(FusionAppsFusionEnvironmentAdminUserTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetId"></a>

```java
public void resetId()
```

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FusionAppsFusionEnvironmentAdminUser resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_admin_user.FusionAppsFusionEnvironmentAdminUser;

FusionAppsFusionEnvironmentAdminUser.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_admin_user.FusionAppsFusionEnvironmentAdminUser;

FusionAppsFusionEnvironmentAdminUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_admin_user.FusionAppsFusionEnvironmentAdminUser;

FusionAppsFusionEnvironmentAdminUser.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_admin_user.FusionAppsFusionEnvironmentAdminUser;

FusionAppsFusionEnvironmentAdminUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FusionAppsFusionEnvironmentAdminUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FusionAppsFusionEnvironmentAdminUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FusionAppsFusionEnvironmentAdminUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FusionAppsFusionEnvironmentAdminUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FusionAppsFusionEnvironmentAdminUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList">FusionAppsFusionEnvironmentAdminUserItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference">FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.emailAddressInput">emailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fusionEnvironmentIdInput">fusionEnvironmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.items"></a>

```java
public FusionAppsFusionEnvironmentAdminUserItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList">FusionAppsFusionEnvironmentAdminUserItemsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.timeouts"></a>

```java
public FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference">FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference</a>

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.emailAddressInput"></a>

```java
public java.lang.String getEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `fusionEnvironmentIdInput`<sup>Optional</sup> <a name="fusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fusionEnvironmentIdInput"></a>

```java
public java.lang.String getFusionEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fusionEnvironmentId"></a>

```java
public java.lang.String getFusionEnvironmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FusionAppsFusionEnvironmentAdminUserConfig <a name="FusionAppsFusionEnvironmentAdminUserConfig" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_admin_user.FusionAppsFusionEnvironmentAdminUserConfig;

FusionAppsFusionEnvironmentAdminUserConfig.builder()
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
    .emailAddress(java.lang.String)
    .firstName(java.lang.String)
    .fusionEnvironmentId(java.lang.String)
    .lastName(java.lang.String)
    .username(java.lang.String)
//  .id(java.lang.String)
//  .password(java.lang.String)
//  .timeouts(FusionAppsFusionEnvironmentAdminUserTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#email_address FusionAppsFusionEnvironmentAdminUser#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#first_name FusionAppsFusionEnvironmentAdminUser#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#fusion_environment_id FusionAppsFusionEnvironmentAdminUser#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#last_name FusionAppsFusionEnvironmentAdminUser#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#username FusionAppsFusionEnvironmentAdminUser#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#id FusionAppsFusionEnvironmentAdminUser#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#password FusionAppsFusionEnvironmentAdminUser#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#email_address FusionAppsFusionEnvironmentAdminUser#email_address}.

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#first_name FusionAppsFusionEnvironmentAdminUser#first_name}.

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.fusionEnvironmentId"></a>

```java
public java.lang.String getFusionEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#fusion_environment_id FusionAppsFusionEnvironmentAdminUser#fusion_environment_id}.

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#last_name FusionAppsFusionEnvironmentAdminUser#last_name}.

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#username FusionAppsFusionEnvironmentAdminUser#username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#id FusionAppsFusionEnvironmentAdminUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#password FusionAppsFusionEnvironmentAdminUser#password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.timeouts"></a>

```java
public FusionAppsFusionEnvironmentAdminUserTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#timeouts FusionAppsFusionEnvironmentAdminUser#timeouts}

---

### FusionAppsFusionEnvironmentAdminUserItems <a name="FusionAppsFusionEnvironmentAdminUserItems" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_admin_user.FusionAppsFusionEnvironmentAdminUserItems;

FusionAppsFusionEnvironmentAdminUserItems.builder()
    .build();
```


### FusionAppsFusionEnvironmentAdminUserTimeouts <a name="FusionAppsFusionEnvironmentAdminUserTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_admin_user.FusionAppsFusionEnvironmentAdminUserTimeouts;

FusionAppsFusionEnvironmentAdminUserTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#create FusionAppsFusionEnvironmentAdminUser#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#delete FusionAppsFusionEnvironmentAdminUser#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#update FusionAppsFusionEnvironmentAdminUser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#create FusionAppsFusionEnvironmentAdminUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#delete FusionAppsFusionEnvironmentAdminUser#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#update FusionAppsFusionEnvironmentAdminUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FusionAppsFusionEnvironmentAdminUserItemsList <a name="FusionAppsFusionEnvironmentAdminUserItemsList" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_admin_user.FusionAppsFusionEnvironmentAdminUserItemsList;

new FusionAppsFusionEnvironmentAdminUserItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.get"></a>

```java
public FusionAppsFusionEnvironmentAdminUserItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FusionAppsFusionEnvironmentAdminUserItemsOutputReference <a name="FusionAppsFusionEnvironmentAdminUserItemsOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_admin_user.FusionAppsFusionEnvironmentAdminUserItemsOutputReference;

new FusionAppsFusionEnvironmentAdminUserItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItems">FusionAppsFusionEnvironmentAdminUserItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.internalValue"></a>

```java
public FusionAppsFusionEnvironmentAdminUserItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItems">FusionAppsFusionEnvironmentAdminUserItems</a>

---


### FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference <a name="FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_admin_user.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference;

new FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a>

---



