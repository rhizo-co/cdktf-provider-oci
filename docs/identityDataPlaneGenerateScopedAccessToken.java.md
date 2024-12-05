# `identityDataPlaneGenerateScopedAccessToken` Submodule <a name="`identityDataPlaneGenerateScopedAccessToken` Submodule" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDataPlaneGenerateScopedAccessToken <a name="IdentityDataPlaneGenerateScopedAccessToken" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token oci_identity_data_plane_generate_scoped_access_token}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_data_plane_generate_scoped_access_token.IdentityDataPlaneGenerateScopedAccessToken;

IdentityDataPlaneGenerateScopedAccessToken.Builder.create(Construct scope, java.lang.String id)
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
    .publicKey(java.lang.String)
    .scope(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(IdentityDataPlaneGenerateScopedAccessTokenTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.publicKey">publicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#public_key IdentityDataPlaneGenerateScopedAccessToken#public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#scope IdentityDataPlaneGenerateScopedAccessToken#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#id IdentityDataPlaneGenerateScopedAccessToken#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.publicKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#public_key IdentityDataPlaneGenerateScopedAccessToken#public_key}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#scope IdentityDataPlaneGenerateScopedAccessToken#scope}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#id IdentityDataPlaneGenerateScopedAccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#timeouts IdentityDataPlaneGenerateScopedAccessToken#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.putTimeouts"></a>

```java
public void putTimeouts(IdentityDataPlaneGenerateScopedAccessTokenTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDataPlaneGenerateScopedAccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_data_plane_generate_scoped_access_token.IdentityDataPlaneGenerateScopedAccessToken;

IdentityDataPlaneGenerateScopedAccessToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_data_plane_generate_scoped_access_token.IdentityDataPlaneGenerateScopedAccessToken;

IdentityDataPlaneGenerateScopedAccessToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_data_plane_generate_scoped_access_token.IdentityDataPlaneGenerateScopedAccessToken;

IdentityDataPlaneGenerateScopedAccessToken.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_data_plane_generate_scoped_access_token.IdentityDataPlaneGenerateScopedAccessToken;

IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityDataPlaneGenerateScopedAccessToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityDataPlaneGenerateScopedAccessToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityDataPlaneGenerateScopedAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDataPlaneGenerateScopedAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference">IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.publicKeyInput">publicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.timeouts"></a>

```java
public IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference">IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.publicKeyInput"></a>

```java
public java.lang.String getPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDataPlaneGenerateScopedAccessTokenConfig <a name="IdentityDataPlaneGenerateScopedAccessTokenConfig" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_data_plane_generate_scoped_access_token.IdentityDataPlaneGenerateScopedAccessTokenConfig;

IdentityDataPlaneGenerateScopedAccessTokenConfig.builder()
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
    .publicKey(java.lang.String)
    .scope(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(IdentityDataPlaneGenerateScopedAccessTokenTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#public_key IdentityDataPlaneGenerateScopedAccessToken#public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#scope IdentityDataPlaneGenerateScopedAccessToken#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#id IdentityDataPlaneGenerateScopedAccessToken#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#public_key IdentityDataPlaneGenerateScopedAccessToken#public_key}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#scope IdentityDataPlaneGenerateScopedAccessToken#scope}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#id IdentityDataPlaneGenerateScopedAccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.timeouts"></a>

```java
public IdentityDataPlaneGenerateScopedAccessTokenTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#timeouts IdentityDataPlaneGenerateScopedAccessToken#timeouts}

---

### IdentityDataPlaneGenerateScopedAccessTokenTimeouts <a name="IdentityDataPlaneGenerateScopedAccessTokenTimeouts" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_data_plane_generate_scoped_access_token.IdentityDataPlaneGenerateScopedAccessTokenTimeouts;

IdentityDataPlaneGenerateScopedAccessTokenTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#create IdentityDataPlaneGenerateScopedAccessToken#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#delete IdentityDataPlaneGenerateScopedAccessToken#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#update IdentityDataPlaneGenerateScopedAccessToken#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#create IdentityDataPlaneGenerateScopedAccessToken#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#delete IdentityDataPlaneGenerateScopedAccessToken#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#update IdentityDataPlaneGenerateScopedAccessToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference <a name="IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_data_plane_generate_scoped_access_token.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference;

new IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a>

---



