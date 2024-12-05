# `osmanagementManagedInstance` Submodule <a name="`osmanagementManagedInstance` Submodule" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsmanagementManagedInstance <a name="OsmanagementManagedInstance" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance oci_osmanagement_managed_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstance;

OsmanagementManagedInstance.Builder.create(Construct scope, java.lang.String id)
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
    .managedInstanceId(java.lang.String)
//  .id(java.lang.String)
//  .isDataCollectionAuthorized(java.lang.Boolean)
//  .isDataCollectionAuthorized(IResolvable)
//  .notificationTopicId(java.lang.String)
//  .timeouts(OsmanagementManagedInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#managed_instance_id OsmanagementManagedInstance#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#id OsmanagementManagedInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.isDataCollectionAuthorized">isDataCollectionAuthorized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#is_data_collection_authorized OsmanagementManagedInstance#is_data_collection_authorized}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.notificationTopicId">notificationTopicId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#notification_topic_id OsmanagementManagedInstance#notification_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.managedInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#managed_instance_id OsmanagementManagedInstance#managed_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#id OsmanagementManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDataCollectionAuthorized`<sup>Optional</sup> <a name="isDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.isDataCollectionAuthorized"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#is_data_collection_authorized OsmanagementManagedInstance#is_data_collection_authorized}.

---

##### `notificationTopicId`<sup>Optional</sup> <a name="notificationTopicId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.notificationTopicId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#notification_topic_id OsmanagementManagedInstance#notification_topic_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#timeouts OsmanagementManagedInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetIsDataCollectionAuthorized">resetIsDataCollectionAuthorized</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetNotificationTopicId">resetNotificationTopicId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.putTimeouts"></a>

```java
public void putTimeouts(OsmanagementManagedInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetId"></a>

```java
public void resetId()
```

##### `resetIsDataCollectionAuthorized` <a name="resetIsDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetIsDataCollectionAuthorized"></a>

```java
public void resetIsDataCollectionAuthorized()
```

##### `resetNotificationTopicId` <a name="resetNotificationTopicId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetNotificationTopicId"></a>

```java
public void resetNotificationTopicId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsmanagementManagedInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstance;

OsmanagementManagedInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstance;

OsmanagementManagedInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstance;

OsmanagementManagedInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstance;

OsmanagementManagedInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OsmanagementManagedInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OsmanagementManagedInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OsmanagementManagedInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OsmanagementManagedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OsmanagementManagedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.autonomous">autonomous</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList">OsmanagementManagedInstanceAutonomousList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.bugUpdatesAvailable">bugUpdatesAvailable</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.childSoftwareSources">childSoftwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList">OsmanagementManagedInstanceChildSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.enhancementUpdatesAvailable">enhancementUpdatesAvailable</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isRebootRequired">isRebootRequired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.kspliceEffectiveKernelVersion">kspliceEffectiveKernelVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lastBoot">lastBoot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lastCheckin">lastCheckin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceGroups">managedInstanceGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList">OsmanagementManagedInstanceManagedInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osFamily">osFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osKernelVersion">osKernelVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osName">osName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osVersion">osVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.otherUpdatesAvailable">otherUpdatesAvailable</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.parentSoftwareSource">parentSoftwareSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList">OsmanagementManagedInstanceParentSoftwareSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.scheduledJobCount">scheduledJobCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.securityUpdatesAvailable">securityUpdatesAvailable</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference">OsmanagementManagedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.updatesAvailable">updatesAvailable</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.workRequestCount">workRequestCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isDataCollectionAuthorizedInput">isDataCollectionAuthorizedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.notificationTopicIdInput">notificationTopicIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isDataCollectionAuthorized">isDataCollectionAuthorized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.notificationTopicId">notificationTopicId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomous`<sup>Required</sup> <a name="autonomous" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.autonomous"></a>

```java
public OsmanagementManagedInstanceAutonomousList getAutonomous();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList">OsmanagementManagedInstanceAutonomousList</a>

---

##### `bugUpdatesAvailable`<sup>Required</sup> <a name="bugUpdatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.bugUpdatesAvailable"></a>

```java
public java.lang.Number getBugUpdatesAvailable();
```

- *Type:* java.lang.Number

---

##### `childSoftwareSources`<sup>Required</sup> <a name="childSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.childSoftwareSources"></a>

```java
public OsmanagementManagedInstanceChildSoftwareSourcesList getChildSoftwareSources();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList">OsmanagementManagedInstanceChildSoftwareSourcesList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enhancementUpdatesAvailable`<sup>Required</sup> <a name="enhancementUpdatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.enhancementUpdatesAvailable"></a>

```java
public java.lang.Number getEnhancementUpdatesAvailable();
```

- *Type:* java.lang.Number

---

##### `isRebootRequired`<sup>Required</sup> <a name="isRebootRequired" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isRebootRequired"></a>

```java
public IResolvable getIsRebootRequired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `kspliceEffectiveKernelVersion`<sup>Required</sup> <a name="kspliceEffectiveKernelVersion" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.kspliceEffectiveKernelVersion"></a>

```java
public java.lang.String getKspliceEffectiveKernelVersion();
```

- *Type:* java.lang.String

---

##### `lastBoot`<sup>Required</sup> <a name="lastBoot" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lastBoot"></a>

```java
public java.lang.String getLastBoot();
```

- *Type:* java.lang.String

---

##### `lastCheckin`<sup>Required</sup> <a name="lastCheckin" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lastCheckin"></a>

```java
public java.lang.String getLastCheckin();
```

- *Type:* java.lang.String

---

##### `managedInstanceGroups`<sup>Required</sup> <a name="managedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceGroups"></a>

```java
public OsmanagementManagedInstanceManagedInstanceGroupsList getManagedInstanceGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList">OsmanagementManagedInstanceManagedInstanceGroupsList</a>

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osFamily"></a>

```java
public java.lang.String getOsFamily();
```

- *Type:* java.lang.String

---

##### `osKernelVersion`<sup>Required</sup> <a name="osKernelVersion" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osKernelVersion"></a>

```java
public java.lang.String getOsKernelVersion();
```

- *Type:* java.lang.String

---

##### `osName`<sup>Required</sup> <a name="osName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osName"></a>

```java
public java.lang.String getOsName();
```

- *Type:* java.lang.String

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osVersion"></a>

```java
public java.lang.String getOsVersion();
```

- *Type:* java.lang.String

---

##### `otherUpdatesAvailable`<sup>Required</sup> <a name="otherUpdatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.otherUpdatesAvailable"></a>

```java
public java.lang.Number getOtherUpdatesAvailable();
```

- *Type:* java.lang.Number

---

##### `parentSoftwareSource`<sup>Required</sup> <a name="parentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.parentSoftwareSource"></a>

```java
public OsmanagementManagedInstanceParentSoftwareSourceList getParentSoftwareSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList">OsmanagementManagedInstanceParentSoftwareSourceList</a>

---

##### `scheduledJobCount`<sup>Required</sup> <a name="scheduledJobCount" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.scheduledJobCount"></a>

```java
public java.lang.Number getScheduledJobCount();
```

- *Type:* java.lang.Number

---

##### `securityUpdatesAvailable`<sup>Required</sup> <a name="securityUpdatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.securityUpdatesAvailable"></a>

```java
public java.lang.Number getSecurityUpdatesAvailable();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.timeouts"></a>

```java
public OsmanagementManagedInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference">OsmanagementManagedInstanceTimeoutsOutputReference</a>

---

##### `updatesAvailable`<sup>Required</sup> <a name="updatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.updatesAvailable"></a>

```java
public java.lang.Number getUpdatesAvailable();
```

- *Type:* java.lang.Number

---

##### `workRequestCount`<sup>Required</sup> <a name="workRequestCount" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.workRequestCount"></a>

```java
public java.lang.Number getWorkRequestCount();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isDataCollectionAuthorizedInput`<sup>Optional</sup> <a name="isDataCollectionAuthorizedInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isDataCollectionAuthorizedInput"></a>

```java
public java.lang.Object getIsDataCollectionAuthorizedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceIdInput"></a>

```java
public java.lang.String getManagedInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `notificationTopicIdInput`<sup>Optional</sup> <a name="notificationTopicIdInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.notificationTopicIdInput"></a>

```java
public java.lang.String getNotificationTopicIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isDataCollectionAuthorized`<sup>Required</sup> <a name="isDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isDataCollectionAuthorized"></a>

```java
public java.lang.Object getIsDataCollectionAuthorized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

---

##### `notificationTopicId`<sup>Required</sup> <a name="notificationTopicId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.notificationTopicId"></a>

```java
public java.lang.String getNotificationTopicId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OsmanagementManagedInstanceAutonomous <a name="OsmanagementManagedInstanceAutonomous" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomous"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomous.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstanceAutonomous;

OsmanagementManagedInstanceAutonomous.builder()
    .build();
```


### OsmanagementManagedInstanceChildSoftwareSources <a name="OsmanagementManagedInstanceChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstanceChildSoftwareSources;

OsmanagementManagedInstanceChildSoftwareSources.builder()
    .build();
```


### OsmanagementManagedInstanceConfig <a name="OsmanagementManagedInstanceConfig" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstanceConfig;

OsmanagementManagedInstanceConfig.builder()
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
    .managedInstanceId(java.lang.String)
//  .id(java.lang.String)
//  .isDataCollectionAuthorized(java.lang.Boolean)
//  .isDataCollectionAuthorized(IResolvable)
//  .notificationTopicId(java.lang.String)
//  .timeouts(OsmanagementManagedInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#managed_instance_id OsmanagementManagedInstance#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#id OsmanagementManagedInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.isDataCollectionAuthorized">isDataCollectionAuthorized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#is_data_collection_authorized OsmanagementManagedInstance#is_data_collection_authorized}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.notificationTopicId">notificationTopicId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#notification_topic_id OsmanagementManagedInstance#notification_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#managed_instance_id OsmanagementManagedInstance#managed_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#id OsmanagementManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDataCollectionAuthorized`<sup>Optional</sup> <a name="isDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.isDataCollectionAuthorized"></a>

```java
public java.lang.Object getIsDataCollectionAuthorized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#is_data_collection_authorized OsmanagementManagedInstance#is_data_collection_authorized}.

---

##### `notificationTopicId`<sup>Optional</sup> <a name="notificationTopicId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.notificationTopicId"></a>

```java
public java.lang.String getNotificationTopicId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#notification_topic_id OsmanagementManagedInstance#notification_topic_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.timeouts"></a>

```java
public OsmanagementManagedInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#timeouts OsmanagementManagedInstance#timeouts}

---

### OsmanagementManagedInstanceManagedInstanceGroups <a name="OsmanagementManagedInstanceManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstanceManagedInstanceGroups;

OsmanagementManagedInstanceManagedInstanceGroups.builder()
    .build();
```


### OsmanagementManagedInstanceParentSoftwareSource <a name="OsmanagementManagedInstanceParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstanceParentSoftwareSource;

OsmanagementManagedInstanceParentSoftwareSource.builder()
    .build();
```


### OsmanagementManagedInstanceTimeouts <a name="OsmanagementManagedInstanceTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstanceTimeouts;

OsmanagementManagedInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#create OsmanagementManagedInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#delete OsmanagementManagedInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#update OsmanagementManagedInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#create OsmanagementManagedInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#delete OsmanagementManagedInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#update OsmanagementManagedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsmanagementManagedInstanceAutonomousList <a name="OsmanagementManagedInstanceAutonomousList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstanceAutonomousList;

new OsmanagementManagedInstanceAutonomousList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.get"></a>

```java
public OsmanagementManagedInstanceAutonomousOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OsmanagementManagedInstanceAutonomousOutputReference <a name="OsmanagementManagedInstanceAutonomousOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstanceAutonomousOutputReference;

new OsmanagementManagedInstanceAutonomousOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.isAutoUpdateEnabled">isAutoUpdateEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomous">OsmanagementManagedInstanceAutonomous</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isAutoUpdateEnabled`<sup>Required</sup> <a name="isAutoUpdateEnabled" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.isAutoUpdateEnabled"></a>

```java
public IResolvable getIsAutoUpdateEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.internalValue"></a>

```java
public OsmanagementManagedInstanceAutonomous getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomous">OsmanagementManagedInstanceAutonomous</a>

---


### OsmanagementManagedInstanceChildSoftwareSourcesList <a name="OsmanagementManagedInstanceChildSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstanceChildSoftwareSourcesList;

new OsmanagementManagedInstanceChildSoftwareSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.get"></a>

```java
public OsmanagementManagedInstanceChildSoftwareSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OsmanagementManagedInstanceChildSoftwareSourcesOutputReference <a name="OsmanagementManagedInstanceChildSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference;

new OsmanagementManagedInstanceChildSoftwareSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSources">OsmanagementManagedInstanceChildSoftwareSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.internalValue"></a>

```java
public OsmanagementManagedInstanceChildSoftwareSources getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSources">OsmanagementManagedInstanceChildSoftwareSources</a>

---


### OsmanagementManagedInstanceManagedInstanceGroupsList <a name="OsmanagementManagedInstanceManagedInstanceGroupsList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstanceManagedInstanceGroupsList;

new OsmanagementManagedInstanceManagedInstanceGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.get"></a>

```java
public OsmanagementManagedInstanceManagedInstanceGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OsmanagementManagedInstanceManagedInstanceGroupsOutputReference <a name="OsmanagementManagedInstanceManagedInstanceGroupsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference;

new OsmanagementManagedInstanceManagedInstanceGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroups">OsmanagementManagedInstanceManagedInstanceGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.internalValue"></a>

```java
public OsmanagementManagedInstanceManagedInstanceGroups getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroups">OsmanagementManagedInstanceManagedInstanceGroups</a>

---


### OsmanagementManagedInstanceParentSoftwareSourceList <a name="OsmanagementManagedInstanceParentSoftwareSourceList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstanceParentSoftwareSourceList;

new OsmanagementManagedInstanceParentSoftwareSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.get"></a>

```java
public OsmanagementManagedInstanceParentSoftwareSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OsmanagementManagedInstanceParentSoftwareSourceOutputReference <a name="OsmanagementManagedInstanceParentSoftwareSourceOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference;

new OsmanagementManagedInstanceParentSoftwareSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSource">OsmanagementManagedInstanceParentSoftwareSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.internalValue"></a>

```java
public OsmanagementManagedInstanceParentSoftwareSource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSource">OsmanagementManagedInstanceParentSoftwareSource</a>

---


### OsmanagementManagedInstanceTimeoutsOutputReference <a name="OsmanagementManagedInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance.OsmanagementManagedInstanceTimeoutsOutputReference;

new OsmanagementManagedInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a>

---



