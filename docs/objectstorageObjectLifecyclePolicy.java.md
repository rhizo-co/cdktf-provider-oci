# `objectstorageObjectLifecyclePolicy` Submodule <a name="`objectstorageObjectLifecyclePolicy` Submodule" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstorageObjectLifecyclePolicy <a name="ObjectstorageObjectLifecyclePolicy" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy oci_objectstorage_object_lifecycle_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object_lifecycle_policy.ObjectstorageObjectLifecyclePolicy;

ObjectstorageObjectLifecyclePolicy.Builder.create(Construct scope, java.lang.String id)
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
    .bucket(java.lang.String)
    .namespace(java.lang.String)
//  .id(java.lang.String)
//  .rules(IResolvable)
//  .rules(java.util.List<ObjectstorageObjectLifecyclePolicyRules>)
//  .timeouts(ObjectstorageObjectLifecyclePolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#bucket ObjectstorageObjectLifecyclePolicy#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#namespace ObjectstorageObjectLifecyclePolicy#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#id ObjectstorageObjectLifecyclePolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>></code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#bucket ObjectstorageObjectLifecyclePolicy#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#namespace ObjectstorageObjectLifecyclePolicy#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#id ObjectstorageObjectLifecyclePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#rules ObjectstorageObjectLifecyclePolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#timeouts ObjectstorageObjectLifecyclePolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<ObjectstorageObjectLifecyclePolicyRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putTimeouts"></a>

```java
public void putTimeouts(ObjectstorageObjectLifecyclePolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetId"></a>

```java
public void resetId()
```

##### `resetRules` <a name="resetRules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetRules"></a>

```java
public void resetRules()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObjectstorageObjectLifecyclePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object_lifecycle_policy.ObjectstorageObjectLifecyclePolicy;

ObjectstorageObjectLifecyclePolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object_lifecycle_policy.ObjectstorageObjectLifecyclePolicy;

ObjectstorageObjectLifecyclePolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object_lifecycle_policy.ObjectstorageObjectLifecyclePolicy;

ObjectstorageObjectLifecyclePolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object_lifecycle_policy.ObjectstorageObjectLifecyclePolicy;

ObjectstorageObjectLifecyclePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ObjectstorageObjectLifecyclePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ObjectstorageObjectLifecyclePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ObjectstorageObjectLifecyclePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ObjectstorageObjectLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstorageObjectLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList">ObjectstorageObjectLifecyclePolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference">ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.rules"></a>

```java
public ObjectstorageObjectLifecyclePolicyRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList">ObjectstorageObjectLifecyclePolicyRulesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeouts"></a>

```java
public ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference">ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstorageObjectLifecyclePolicyConfig <a name="ObjectstorageObjectLifecyclePolicyConfig" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object_lifecycle_policy.ObjectstorageObjectLifecyclePolicyConfig;

ObjectstorageObjectLifecyclePolicyConfig.builder()
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
    .bucket(java.lang.String)
    .namespace(java.lang.String)
//  .id(java.lang.String)
//  .rules(IResolvable)
//  .rules(java.util.List<ObjectstorageObjectLifecyclePolicyRules>)
//  .timeouts(ObjectstorageObjectLifecyclePolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#bucket ObjectstorageObjectLifecyclePolicy#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#namespace ObjectstorageObjectLifecyclePolicy#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#id ObjectstorageObjectLifecyclePolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>></code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#bucket ObjectstorageObjectLifecyclePolicy#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#namespace ObjectstorageObjectLifecyclePolicy#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#id ObjectstorageObjectLifecyclePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#rules ObjectstorageObjectLifecyclePolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.timeouts"></a>

```java
public ObjectstorageObjectLifecyclePolicyTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#timeouts ObjectstorageObjectLifecyclePolicy#timeouts}

---

### ObjectstorageObjectLifecyclePolicyRules <a name="ObjectstorageObjectLifecyclePolicyRules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object_lifecycle_policy.ObjectstorageObjectLifecyclePolicyRules;

ObjectstorageObjectLifecyclePolicyRules.builder()
    .action(java.lang.String)
    .isEnabled(java.lang.Boolean)
    .isEnabled(IResolvable)
    .name(java.lang.String)
    .timeAmount(java.lang.String)
    .timeUnit(java.lang.String)
//  .objectNameFilter(ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#action ObjectstorageObjectLifecyclePolicy#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#is_enabled ObjectstorageObjectLifecyclePolicy#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#name ObjectstorageObjectLifecyclePolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.timeAmount">timeAmount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#time_amount ObjectstorageObjectLifecyclePolicy#time_amount}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.timeUnit">timeUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#time_unit ObjectstorageObjectLifecyclePolicy#time_unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.objectNameFilter">objectNameFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a></code> | object_name_filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#target ObjectstorageObjectLifecyclePolicy#target}. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#action ObjectstorageObjectLifecyclePolicy#action}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#is_enabled ObjectstorageObjectLifecyclePolicy#is_enabled}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#name ObjectstorageObjectLifecyclePolicy#name}.

---

##### `timeAmount`<sup>Required</sup> <a name="timeAmount" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.timeAmount"></a>

```java
public java.lang.String getTimeAmount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#time_amount ObjectstorageObjectLifecyclePolicy#time_amount}.

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.timeUnit"></a>

```java
public java.lang.String getTimeUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#time_unit ObjectstorageObjectLifecyclePolicy#time_unit}.

---

##### `objectNameFilter`<sup>Optional</sup> <a name="objectNameFilter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.objectNameFilter"></a>

```java
public ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter getObjectNameFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a>

object_name_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#object_name_filter ObjectstorageObjectLifecyclePolicy#object_name_filter}

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#target ObjectstorageObjectLifecyclePolicy#target}.

---

### ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter <a name="ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object_lifecycle_policy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter;

ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.builder()
//  .exclusionPatterns(java.util.List<java.lang.String>)
//  .inclusionPatterns(java.util.List<java.lang.String>)
//  .inclusionPrefixes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.exclusionPatterns">exclusionPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#exclusion_patterns ObjectstorageObjectLifecyclePolicy#exclusion_patterns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.inclusionPatterns">inclusionPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_patterns ObjectstorageObjectLifecyclePolicy#inclusion_patterns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.inclusionPrefixes">inclusionPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_prefixes ObjectstorageObjectLifecyclePolicy#inclusion_prefixes}. |

---

##### `exclusionPatterns`<sup>Optional</sup> <a name="exclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.exclusionPatterns"></a>

```java
public java.util.List<java.lang.String> getExclusionPatterns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#exclusion_patterns ObjectstorageObjectLifecyclePolicy#exclusion_patterns}.

---

##### `inclusionPatterns`<sup>Optional</sup> <a name="inclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.inclusionPatterns"></a>

```java
public java.util.List<java.lang.String> getInclusionPatterns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_patterns ObjectstorageObjectLifecyclePolicy#inclusion_patterns}.

---

##### `inclusionPrefixes`<sup>Optional</sup> <a name="inclusionPrefixes" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.inclusionPrefixes"></a>

```java
public java.util.List<java.lang.String> getInclusionPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_prefixes ObjectstorageObjectLifecyclePolicy#inclusion_prefixes}.

---

### ObjectstorageObjectLifecyclePolicyTimeouts <a name="ObjectstorageObjectLifecyclePolicyTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object_lifecycle_policy.ObjectstorageObjectLifecyclePolicyTimeouts;

ObjectstorageObjectLifecyclePolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#create ObjectstorageObjectLifecyclePolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#delete ObjectstorageObjectLifecyclePolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#update ObjectstorageObjectLifecyclePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#create ObjectstorageObjectLifecyclePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#delete ObjectstorageObjectLifecyclePolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#update ObjectstorageObjectLifecyclePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstorageObjectLifecyclePolicyRulesList <a name="ObjectstorageObjectLifecyclePolicyRulesList" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object_lifecycle_policy.ObjectstorageObjectLifecyclePolicyRulesList;

new ObjectstorageObjectLifecyclePolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.get"></a>

```java
public ObjectstorageObjectLifecyclePolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>>

---


### ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference <a name="ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object_lifecycle_policy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference;

new ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetExclusionPatterns">resetExclusionPatterns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetInclusionPatterns">resetInclusionPatterns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetInclusionPrefixes">resetInclusionPrefixes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclusionPatterns` <a name="resetExclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetExclusionPatterns"></a>

```java
public void resetExclusionPatterns()
```

##### `resetInclusionPatterns` <a name="resetInclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetInclusionPatterns"></a>

```java
public void resetInclusionPatterns()
```

##### `resetInclusionPrefixes` <a name="resetInclusionPrefixes" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetInclusionPrefixes"></a>

```java
public void resetInclusionPrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatternsInput">exclusionPatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatternsInput">inclusionPatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixesInput">inclusionPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatterns">exclusionPatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatterns">inclusionPatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixes">inclusionPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclusionPatternsInput`<sup>Optional</sup> <a name="exclusionPatternsInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatternsInput"></a>

```java
public java.util.List<java.lang.String> getExclusionPatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inclusionPatternsInput`<sup>Optional</sup> <a name="inclusionPatternsInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatternsInput"></a>

```java
public java.util.List<java.lang.String> getInclusionPatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inclusionPrefixesInput`<sup>Optional</sup> <a name="inclusionPrefixesInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getInclusionPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclusionPatterns`<sup>Required</sup> <a name="exclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatterns"></a>

```java
public java.util.List<java.lang.String> getExclusionPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inclusionPatterns`<sup>Required</sup> <a name="inclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatterns"></a>

```java
public java.util.List<java.lang.String> getInclusionPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inclusionPrefixes`<sup>Required</sup> <a name="inclusionPrefixes" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixes"></a>

```java
public java.util.List<java.lang.String> getInclusionPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.internalValue"></a>

```java
public ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a>

---


### ObjectstorageObjectLifecyclePolicyRulesOutputReference <a name="ObjectstorageObjectLifecyclePolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object_lifecycle_policy.ObjectstorageObjectLifecyclePolicyRulesOutputReference;

new ObjectstorageObjectLifecyclePolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.putObjectNameFilter">putObjectNameFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resetObjectNameFilter">resetObjectNameFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectNameFilter` <a name="putObjectNameFilter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.putObjectNameFilter"></a>

```java
public void putObjectNameFilter(ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.putObjectNameFilter.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a>

---

##### `resetObjectNameFilter` <a name="resetObjectNameFilter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resetObjectNameFilter"></a>

```java
public void resetObjectNameFilter()
```

##### `resetTarget` <a name="resetTarget" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilter">objectNameFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilterInput">objectNameFilterInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmountInput">timeAmountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnitInput">timeUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmount">timeAmount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnit">timeUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectNameFilter`<sup>Required</sup> <a name="objectNameFilter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilter"></a>

```java
public ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference getObjectNameFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `objectNameFilterInput`<sup>Optional</sup> <a name="objectNameFilterInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilterInput"></a>

```java
public ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter getObjectNameFilterInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `timeAmountInput`<sup>Optional</sup> <a name="timeAmountInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmountInput"></a>

```java
public java.lang.String getTimeAmountInput();
```

- *Type:* java.lang.String

---

##### `timeUnitInput`<sup>Optional</sup> <a name="timeUnitInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnitInput"></a>

```java
public java.lang.String getTimeUnitInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `timeAmount`<sup>Required</sup> <a name="timeAmount" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmount"></a>

```java
public java.lang.String getTimeAmount();
```

- *Type:* java.lang.String

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnit"></a>

```java
public java.lang.String getTimeUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>

---


### ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference <a name="ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object_lifecycle_policy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference;

new ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a>

---



