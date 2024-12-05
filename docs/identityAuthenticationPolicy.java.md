# `identityAuthenticationPolicy` Submodule <a name="`identityAuthenticationPolicy` Submodule" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityAuthenticationPolicy <a name="IdentityAuthenticationPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy oci_identity_authentication_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_authentication_policy.IdentityAuthenticationPolicy;

IdentityAuthenticationPolicy.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .networkPolicy(IdentityAuthenticationPolicyNetworkPolicy)
//  .passwordPolicy(IdentityAuthenticationPolicyPasswordPolicy)
//  .timeouts(IdentityAuthenticationPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#compartment_id IdentityAuthenticationPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#id IdentityAuthenticationPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.networkPolicy">networkPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a></code> | network_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.passwordPolicy">passwordPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a></code> | password_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#compartment_id IdentityAuthenticationPolicy#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#id IdentityAuthenticationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkPolicy`<sup>Optional</sup> <a name="networkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.networkPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

network_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_policy IdentityAuthenticationPolicy#network_policy}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.passwordPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

password_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#password_policy IdentityAuthenticationPolicy#password_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#timeouts IdentityAuthenticationPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putNetworkPolicy">putNetworkPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy">putPasswordPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetNetworkPolicy">resetNetworkPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetPasswordPolicy">resetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkPolicy` <a name="putNetworkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putNetworkPolicy"></a>

```java
public void putNetworkPolicy(IdentityAuthenticationPolicyNetworkPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putNetworkPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

---

##### `putPasswordPolicy` <a name="putPasswordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy"></a>

```java
public void putPasswordPolicy(IdentityAuthenticationPolicyPasswordPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putTimeouts"></a>

```java
public void putTimeouts(IdentityAuthenticationPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetNetworkPolicy` <a name="resetNetworkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetNetworkPolicy"></a>

```java
public void resetNetworkPolicy()
```

##### `resetPasswordPolicy` <a name="resetPasswordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetPasswordPolicy"></a>

```java
public void resetPasswordPolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityAuthenticationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_authentication_policy.IdentityAuthenticationPolicy;

IdentityAuthenticationPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_authentication_policy.IdentityAuthenticationPolicy;

IdentityAuthenticationPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_authentication_policy.IdentityAuthenticationPolicy;

IdentityAuthenticationPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_authentication_policy.IdentityAuthenticationPolicy;

IdentityAuthenticationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityAuthenticationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityAuthenticationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityAuthenticationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityAuthenticationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityAuthenticationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicy">networkPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference">IdentityAuthenticationPolicyNetworkPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicy">passwordPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference">IdentityAuthenticationPolicyPasswordPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference">IdentityAuthenticationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicyInput">networkPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicyInput">passwordPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `networkPolicy`<sup>Required</sup> <a name="networkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicy"></a>

```java
public IdentityAuthenticationPolicyNetworkPolicyOutputReference getNetworkPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference">IdentityAuthenticationPolicyNetworkPolicyOutputReference</a>

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicy"></a>

```java
public IdentityAuthenticationPolicyPasswordPolicyOutputReference getPasswordPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference">IdentityAuthenticationPolicyPasswordPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeouts"></a>

```java
public IdentityAuthenticationPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference">IdentityAuthenticationPolicyTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networkPolicyInput`<sup>Optional</sup> <a name="networkPolicyInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicyInput"></a>

```java
public IdentityAuthenticationPolicyNetworkPolicy getNetworkPolicyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

---

##### `passwordPolicyInput`<sup>Optional</sup> <a name="passwordPolicyInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicyInput"></a>

```java
public IdentityAuthenticationPolicyPasswordPolicy getPasswordPolicyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityAuthenticationPolicyConfig <a name="IdentityAuthenticationPolicyConfig" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_authentication_policy.IdentityAuthenticationPolicyConfig;

IdentityAuthenticationPolicyConfig.builder()
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
//  .id(java.lang.String)
//  .networkPolicy(IdentityAuthenticationPolicyNetworkPolicy)
//  .passwordPolicy(IdentityAuthenticationPolicyPasswordPolicy)
//  .timeouts(IdentityAuthenticationPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#compartment_id IdentityAuthenticationPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#id IdentityAuthenticationPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.networkPolicy">networkPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a></code> | network_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.passwordPolicy">passwordPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a></code> | password_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#compartment_id IdentityAuthenticationPolicy#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#id IdentityAuthenticationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkPolicy`<sup>Optional</sup> <a name="networkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.networkPolicy"></a>

```java
public IdentityAuthenticationPolicyNetworkPolicy getNetworkPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

network_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_policy IdentityAuthenticationPolicy#network_policy}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.passwordPolicy"></a>

```java
public IdentityAuthenticationPolicyPasswordPolicy getPasswordPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

password_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#password_policy IdentityAuthenticationPolicy#password_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.timeouts"></a>

```java
public IdentityAuthenticationPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#timeouts IdentityAuthenticationPolicy#timeouts}

---

### IdentityAuthenticationPolicyNetworkPolicy <a name="IdentityAuthenticationPolicyNetworkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_authentication_policy.IdentityAuthenticationPolicyNetworkPolicy;

IdentityAuthenticationPolicyNetworkPolicy.builder()
//  .networkSourceIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy.property.networkSourceIds">networkSourceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_source_ids IdentityAuthenticationPolicy#network_source_ids}. |

---

##### `networkSourceIds`<sup>Optional</sup> <a name="networkSourceIds" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy.property.networkSourceIds"></a>

```java
public java.util.List<java.lang.String> getNetworkSourceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_source_ids IdentityAuthenticationPolicy#network_source_ids}.

---

### IdentityAuthenticationPolicyPasswordPolicy <a name="IdentityAuthenticationPolicyPasswordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_authentication_policy.IdentityAuthenticationPolicyPasswordPolicy;

IdentityAuthenticationPolicyPasswordPolicy.builder()
//  .isLowercaseCharactersRequired(java.lang.Boolean)
//  .isLowercaseCharactersRequired(IResolvable)
//  .isNumericCharactersRequired(java.lang.Boolean)
//  .isNumericCharactersRequired(IResolvable)
//  .isSpecialCharactersRequired(java.lang.Boolean)
//  .isSpecialCharactersRequired(IResolvable)
//  .isUppercaseCharactersRequired(java.lang.Boolean)
//  .isUppercaseCharactersRequired(IResolvable)
//  .isUsernameContainmentAllowed(java.lang.Boolean)
//  .isUsernameContainmentAllowed(IResolvable)
//  .minimumPasswordLength(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isLowercaseCharactersRequired">isLowercaseCharactersRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_lowercase_characters_required IdentityAuthenticationPolicy#is_lowercase_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isNumericCharactersRequired">isNumericCharactersRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_numeric_characters_required IdentityAuthenticationPolicy#is_numeric_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isSpecialCharactersRequired">isSpecialCharactersRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_special_characters_required IdentityAuthenticationPolicy#is_special_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUppercaseCharactersRequired">isUppercaseCharactersRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_uppercase_characters_required IdentityAuthenticationPolicy#is_uppercase_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUsernameContainmentAllowed">isUsernameContainmentAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_username_containment_allowed IdentityAuthenticationPolicy#is_username_containment_allowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.minimumPasswordLength">minimumPasswordLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#minimum_password_length IdentityAuthenticationPolicy#minimum_password_length}. |

---

##### `isLowercaseCharactersRequired`<sup>Optional</sup> <a name="isLowercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isLowercaseCharactersRequired"></a>

```java
public java.lang.Object getIsLowercaseCharactersRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_lowercase_characters_required IdentityAuthenticationPolicy#is_lowercase_characters_required}.

---

##### `isNumericCharactersRequired`<sup>Optional</sup> <a name="isNumericCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isNumericCharactersRequired"></a>

```java
public java.lang.Object getIsNumericCharactersRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_numeric_characters_required IdentityAuthenticationPolicy#is_numeric_characters_required}.

---

##### `isSpecialCharactersRequired`<sup>Optional</sup> <a name="isSpecialCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isSpecialCharactersRequired"></a>

```java
public java.lang.Object getIsSpecialCharactersRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_special_characters_required IdentityAuthenticationPolicy#is_special_characters_required}.

---

##### `isUppercaseCharactersRequired`<sup>Optional</sup> <a name="isUppercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUppercaseCharactersRequired"></a>

```java
public java.lang.Object getIsUppercaseCharactersRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_uppercase_characters_required IdentityAuthenticationPolicy#is_uppercase_characters_required}.

---

##### `isUsernameContainmentAllowed`<sup>Optional</sup> <a name="isUsernameContainmentAllowed" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUsernameContainmentAllowed"></a>

```java
public java.lang.Object getIsUsernameContainmentAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_username_containment_allowed IdentityAuthenticationPolicy#is_username_containment_allowed}.

---

##### `minimumPasswordLength`<sup>Optional</sup> <a name="minimumPasswordLength" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.minimumPasswordLength"></a>

```java
public java.lang.Number getMinimumPasswordLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#minimum_password_length IdentityAuthenticationPolicy#minimum_password_length}.

---

### IdentityAuthenticationPolicyTimeouts <a name="IdentityAuthenticationPolicyTimeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_authentication_policy.IdentityAuthenticationPolicyTimeouts;

IdentityAuthenticationPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#create IdentityAuthenticationPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#delete IdentityAuthenticationPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#update IdentityAuthenticationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#create IdentityAuthenticationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#delete IdentityAuthenticationPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#update IdentityAuthenticationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityAuthenticationPolicyNetworkPolicyOutputReference <a name="IdentityAuthenticationPolicyNetworkPolicyOutputReference" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_authentication_policy.IdentityAuthenticationPolicyNetworkPolicyOutputReference;

new IdentityAuthenticationPolicyNetworkPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resetNetworkSourceIds">resetNetworkSourceIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetworkSourceIds` <a name="resetNetworkSourceIds" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resetNetworkSourceIds"></a>

```java
public void resetNetworkSourceIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIdsInput">networkSourceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIds">networkSourceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkSourceIdsInput`<sup>Optional</sup> <a name="networkSourceIdsInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIdsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkSourceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkSourceIds`<sup>Required</sup> <a name="networkSourceIds" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIds"></a>

```java
public java.util.List<java.lang.String> getNetworkSourceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.internalValue"></a>

```java
public IdentityAuthenticationPolicyNetworkPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

---


### IdentityAuthenticationPolicyPasswordPolicyOutputReference <a name="IdentityAuthenticationPolicyPasswordPolicyOutputReference" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_authentication_policy.IdentityAuthenticationPolicyPasswordPolicyOutputReference;

new IdentityAuthenticationPolicyPasswordPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsLowercaseCharactersRequired">resetIsLowercaseCharactersRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsNumericCharactersRequired">resetIsNumericCharactersRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsSpecialCharactersRequired">resetIsSpecialCharactersRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUppercaseCharactersRequired">resetIsUppercaseCharactersRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUsernameContainmentAllowed">resetIsUsernameContainmentAllowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetMinimumPasswordLength">resetMinimumPasswordLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsLowercaseCharactersRequired` <a name="resetIsLowercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsLowercaseCharactersRequired"></a>

```java
public void resetIsLowercaseCharactersRequired()
```

##### `resetIsNumericCharactersRequired` <a name="resetIsNumericCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsNumericCharactersRequired"></a>

```java
public void resetIsNumericCharactersRequired()
```

##### `resetIsSpecialCharactersRequired` <a name="resetIsSpecialCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsSpecialCharactersRequired"></a>

```java
public void resetIsSpecialCharactersRequired()
```

##### `resetIsUppercaseCharactersRequired` <a name="resetIsUppercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUppercaseCharactersRequired"></a>

```java
public void resetIsUppercaseCharactersRequired()
```

##### `resetIsUsernameContainmentAllowed` <a name="resetIsUsernameContainmentAllowed" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUsernameContainmentAllowed"></a>

```java
public void resetIsUsernameContainmentAllowed()
```

##### `resetMinimumPasswordLength` <a name="resetMinimumPasswordLength" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetMinimumPasswordLength"></a>

```java
public void resetMinimumPasswordLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequiredInput">isLowercaseCharactersRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequiredInput">isNumericCharactersRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequiredInput">isSpecialCharactersRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequiredInput">isUppercaseCharactersRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowedInput">isUsernameContainmentAllowedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLengthInput">minimumPasswordLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequired">isLowercaseCharactersRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequired">isNumericCharactersRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequired">isSpecialCharactersRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequired">isUppercaseCharactersRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowed">isUsernameContainmentAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLength">minimumPasswordLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isLowercaseCharactersRequiredInput`<sup>Optional</sup> <a name="isLowercaseCharactersRequiredInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequiredInput"></a>

```java
public java.lang.Object getIsLowercaseCharactersRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isNumericCharactersRequiredInput`<sup>Optional</sup> <a name="isNumericCharactersRequiredInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequiredInput"></a>

```java
public java.lang.Object getIsNumericCharactersRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSpecialCharactersRequiredInput`<sup>Optional</sup> <a name="isSpecialCharactersRequiredInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequiredInput"></a>

```java
public java.lang.Object getIsSpecialCharactersRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUppercaseCharactersRequiredInput`<sup>Optional</sup> <a name="isUppercaseCharactersRequiredInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequiredInput"></a>

```java
public java.lang.Object getIsUppercaseCharactersRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUsernameContainmentAllowedInput`<sup>Optional</sup> <a name="isUsernameContainmentAllowedInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowedInput"></a>

```java
public java.lang.Object getIsUsernameContainmentAllowedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minimumPasswordLengthInput`<sup>Optional</sup> <a name="minimumPasswordLengthInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLengthInput"></a>

```java
public java.lang.Number getMinimumPasswordLengthInput();
```

- *Type:* java.lang.Number

---

##### `isLowercaseCharactersRequired`<sup>Required</sup> <a name="isLowercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequired"></a>

```java
public java.lang.Object getIsLowercaseCharactersRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isNumericCharactersRequired`<sup>Required</sup> <a name="isNumericCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequired"></a>

```java
public java.lang.Object getIsNumericCharactersRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSpecialCharactersRequired`<sup>Required</sup> <a name="isSpecialCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequired"></a>

```java
public java.lang.Object getIsSpecialCharactersRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUppercaseCharactersRequired`<sup>Required</sup> <a name="isUppercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequired"></a>

```java
public java.lang.Object getIsUppercaseCharactersRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUsernameContainmentAllowed`<sup>Required</sup> <a name="isUsernameContainmentAllowed" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowed"></a>

```java
public java.lang.Object getIsUsernameContainmentAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minimumPasswordLength`<sup>Required</sup> <a name="minimumPasswordLength" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLength"></a>

```java
public java.lang.Number getMinimumPasswordLength();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.internalValue"></a>

```java
public IdentityAuthenticationPolicyPasswordPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

---


### IdentityAuthenticationPolicyTimeoutsOutputReference <a name="IdentityAuthenticationPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.identity_authentication_policy.IdentityAuthenticationPolicyTimeoutsOutputReference;

new IdentityAuthenticationPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>

---



