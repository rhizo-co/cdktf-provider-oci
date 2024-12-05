# `schServiceConnector` Submodule <a name="`schServiceConnector` Submodule" id="rhizo-co-terraform-provider-oci.schServiceConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SchServiceConnector <a name="SchServiceConnector" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector oci_sch_service_connector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnector;

SchServiceConnector.Builder.create(Construct scope, java.lang.String id)
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
    .source(SchServiceConnectorSource)
    .target(SchServiceConnectorTarget)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .tasks(IResolvable)
//  .tasks(java.util.List<SchServiceConnectorTasks>)
//  .timeouts(SchServiceConnectorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#display_name SchServiceConnector#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a></code> | target block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#defined_tags SchServiceConnector#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#description SchServiceConnector#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#freeform_tags SchServiceConnector#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#id SchServiceConnector#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#state SchServiceConnector#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.tasks">tasks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>></code> | tasks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#display_name SchServiceConnector#display_name}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.source"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#source SchServiceConnector#source}

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.target"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#target SchServiceConnector#target}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#defined_tags SchServiceConnector#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#description SchServiceConnector#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#freeform_tags SchServiceConnector#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#id SchServiceConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#state SchServiceConnector#state}.

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.tasks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>>

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#tasks SchServiceConnector#tasks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#timeouts SchServiceConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource">putSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTasks">putTasks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetTasks">resetTasks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSource` <a name="putSource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource"></a>

```java
public void putSource(SchServiceConnectorSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a>

---

##### `putTarget` <a name="putTarget" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget"></a>

```java
public void putTarget(SchServiceConnectorTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a>

---

##### `putTasks` <a name="putTasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTasks"></a>

```java
public void putTasks(IResolvable OR java.util.List<SchServiceConnectorTasks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTasks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTimeouts"></a>

```java
public void putTimeouts(SchServiceConnectorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetState"></a>

```java
public void resetState()
```

##### `resetTasks` <a name="resetTasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetTasks"></a>

```java
public void resetTasks()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SchServiceConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnector;

SchServiceConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnector;

SchServiceConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnector;

SchServiceConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnector;

SchServiceConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SchServiceConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SchServiceConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SchServiceConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SchServiceConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SchServiceConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.lifecyleDetails">lifecyleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference">SchServiceConnectorSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference">SchServiceConnectorTargetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tasks">tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList">SchServiceConnectorTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference">SchServiceConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.sourceInput">sourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.targetInput">targetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tasksInput">tasksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lifecyleDetails`<sup>Required</sup> <a name="lifecyleDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.lifecyleDetails"></a>

```java
public java.lang.String getLifecyleDetails();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.source"></a>

```java
public SchServiceConnectorSourceOutputReference getSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference">SchServiceConnectorSourceOutputReference</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.target"></a>

```java
public SchServiceConnectorTargetOutputReference getTarget();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference">SchServiceConnectorTargetOutputReference</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tasks"></a>

```java
public SchServiceConnectorTasksList getTasks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList">SchServiceConnectorTasksList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeouts"></a>

```java
public SchServiceConnectorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference">SchServiceConnectorTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.sourceInput"></a>

```java
public SchServiceConnectorSource getSourceInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.targetInput"></a>

```java
public SchServiceConnectorTarget getTargetInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a>

---

##### `tasksInput`<sup>Optional</sup> <a name="tasksInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tasksInput"></a>

```java
public java.lang.Object getTasksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SchServiceConnectorConfig <a name="SchServiceConnectorConfig" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorConfig;

SchServiceConnectorConfig.builder()
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
    .source(SchServiceConnectorSource)
    .target(SchServiceConnectorTarget)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .tasks(IResolvable)
//  .tasks(java.util.List<SchServiceConnectorTasks>)
//  .timeouts(SchServiceConnectorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#display_name SchServiceConnector#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a></code> | target block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#defined_tags SchServiceConnector#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#description SchServiceConnector#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#freeform_tags SchServiceConnector#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#id SchServiceConnector#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#state SchServiceConnector#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.tasks">tasks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>></code> | tasks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#display_name SchServiceConnector#display_name}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.source"></a>

```java
public SchServiceConnectorSource getSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#source SchServiceConnector#source}

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.target"></a>

```java
public SchServiceConnectorTarget getTarget();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#target SchServiceConnector#target}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#defined_tags SchServiceConnector#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#description SchServiceConnector#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#freeform_tags SchServiceConnector#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#id SchServiceConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#state SchServiceConnector#state}.

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.tasks"></a>

```java
public java.lang.Object getTasks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>>

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#tasks SchServiceConnector#tasks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.timeouts"></a>

```java
public SchServiceConnectorTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#timeouts SchServiceConnector#timeouts}

---

### SchServiceConnectorSource <a name="SchServiceConnectorSource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorSource;

SchServiceConnectorSource.builder()
    .kind(java.lang.String)
//  .configMap(java.lang.String)
//  .cursor(SchServiceConnectorSourceCursor)
//  .logSources(IResolvable)
//  .logSources(java.util.List<SchServiceConnectorSourceLogSources>)
//  .monitoringSources(IResolvable)
//  .monitoringSources(java.util.List<SchServiceConnectorSourceMonitoringSources>)
//  .pluginName(java.lang.String)
//  .streamId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.configMap">configMap</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#config_map SchServiceConnector#config_map}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.cursor">cursor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a></code> | cursor block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.logSources">logSources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>></code> | log_sources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.monitoringSources">monitoringSources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>></code> | monitoring_sources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.pluginName">pluginName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#plugin_name SchServiceConnector#plugin_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.streamId">streamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `configMap`<sup>Optional</sup> <a name="configMap" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.configMap"></a>

```java
public java.lang.String getConfigMap();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#config_map SchServiceConnector#config_map}.

---

##### `cursor`<sup>Optional</sup> <a name="cursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.cursor"></a>

```java
public SchServiceConnectorSourceCursor getCursor();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a>

cursor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#cursor SchServiceConnector#cursor}

---

##### `logSources`<sup>Optional</sup> <a name="logSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.logSources"></a>

```java
public java.lang.Object getLogSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>>

log_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_sources SchServiceConnector#log_sources}

---

##### `monitoringSources`<sup>Optional</sup> <a name="monitoringSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.monitoringSources"></a>

```java
public java.lang.Object getMonitoringSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>>

monitoring_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#monitoring_sources SchServiceConnector#monitoring_sources}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.pluginName"></a>

```java
public java.lang.String getPluginName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#plugin_name SchServiceConnector#plugin_name}.

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}.

---

### SchServiceConnectorSourceCursor <a name="SchServiceConnectorSourceCursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorSourceCursor;

SchServiceConnectorSourceCursor.builder()
//  .kind(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor.property.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |

---

##### `kind`<sup>Optional</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

### SchServiceConnectorSourceLogSources <a name="SchServiceConnectorSourceLogSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorSourceLogSources;

SchServiceConnectorSourceLogSources.builder()
//  .compartmentId(java.lang.String)
//  .logGroupId(java.lang.String)
//  .logId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.logId">logId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_id SchServiceConnector#log_id}. |

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `logGroupId`<sup>Optional</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}.

---

##### `logId`<sup>Optional</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.logId"></a>

```java
public java.lang.String getLogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_id SchServiceConnector#log_id}.

---

### SchServiceConnectorSourceMonitoringSources <a name="SchServiceConnectorSourceMonitoringSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorSourceMonitoringSources;

SchServiceConnectorSourceMonitoringSources.builder()
//  .compartmentId(java.lang.String)
//  .namespaceDetails(SchServiceConnectorSourceMonitoringSourcesNamespaceDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.property.namespaceDetails">namespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a></code> | namespace_details block. |

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `namespaceDetails`<sup>Optional</sup> <a name="namespaceDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.property.namespaceDetails"></a>

```java
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetails getNamespaceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

namespace_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace_details SchServiceConnector#namespace_details}

---

### SchServiceConnectorSourceMonitoringSourcesNamespaceDetails <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails;

SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.builder()
    .kind(java.lang.String)
    .namespaces(IResolvable)
    .namespaces(java.util.List<SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.property.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.property.namespaces">namespaces</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>></code> | namespaces block. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.property.namespaces"></a>

```java
public java.lang.Object getNamespaces();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>>

namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespaces SchServiceConnector#namespaces}

---

### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces;

SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.builder()
    .metrics(SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics)
    .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | metrics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}. |

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.property.metrics"></a>

```java
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics getMetrics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metrics SchServiceConnector#metrics}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}.

---

### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics;

SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.builder()
    .kind(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.property.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

### SchServiceConnectorTarget <a name="SchServiceConnectorTarget" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorTarget;

SchServiceConnectorTarget.builder()
    .kind(java.lang.String)
//  .batchRolloverSizeInMbs(java.lang.Number)
//  .batchRolloverTimeInMs(java.lang.Number)
//  .batchSizeInKbs(java.lang.Number)
//  .batchSizeInNum(java.lang.Number)
//  .batchTimeInSec(java.lang.Number)
//  .bucket(java.lang.String)
//  .compartmentId(java.lang.String)
//  .dimensions(IResolvable)
//  .dimensions(java.util.List<SchServiceConnectorTargetDimensions>)
//  .enableFormattedMessaging(java.lang.Boolean)
//  .enableFormattedMessaging(IResolvable)
//  .functionId(java.lang.String)
//  .logGroupId(java.lang.String)
//  .logSourceIdentifier(java.lang.String)
//  .metric(java.lang.String)
//  .metricNamespace(java.lang.String)
//  .namespace(java.lang.String)
//  .objectNamePrefix(java.lang.String)
//  .streamId(java.lang.String)
//  .topicId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchRolloverSizeInMbs">batchRolloverSizeInMbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_size_in_mbs SchServiceConnector#batch_rollover_size_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchRolloverTimeInMs">batchRolloverTimeInMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_time_in_ms SchServiceConnector#batch_rollover_time_in_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchSizeInKbs">batchSizeInKbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchSizeInNum">batchSizeInNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_num SchServiceConnector#batch_size_in_num}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchTimeInSec">batchTimeInSec</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#bucket SchServiceConnector#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.dimensions">dimensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>></code> | dimensions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.enableFormattedMessaging">enableFormattedMessaging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#enable_formatted_messaging SchServiceConnector#enable_formatted_messaging}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.functionId">functionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.logSourceIdentifier">logSourceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_source_identifier SchServiceConnector#log_source_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.metric">metric</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric SchServiceConnector#metric}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.metricNamespace">metricNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric_namespace SchServiceConnector#metric_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.objectNamePrefix">objectNamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#object_name_prefix SchServiceConnector#object_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.streamId">streamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.topicId">topicId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#topic_id SchServiceConnector#topic_id}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `batchRolloverSizeInMbs`<sup>Optional</sup> <a name="batchRolloverSizeInMbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchRolloverSizeInMbs"></a>

```java
public java.lang.Number getBatchRolloverSizeInMbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_size_in_mbs SchServiceConnector#batch_rollover_size_in_mbs}.

---

##### `batchRolloverTimeInMs`<sup>Optional</sup> <a name="batchRolloverTimeInMs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchRolloverTimeInMs"></a>

```java
public java.lang.Number getBatchRolloverTimeInMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_time_in_ms SchServiceConnector#batch_rollover_time_in_ms}.

---

##### `batchSizeInKbs`<sup>Optional</sup> <a name="batchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchSizeInKbs"></a>

```java
public java.lang.Number getBatchSizeInKbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}.

---

##### `batchSizeInNum`<sup>Optional</sup> <a name="batchSizeInNum" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchSizeInNum"></a>

```java
public java.lang.Number getBatchSizeInNum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_num SchServiceConnector#batch_size_in_num}.

---

##### `batchTimeInSec`<sup>Optional</sup> <a name="batchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchTimeInSec"></a>

```java
public java.lang.Number getBatchTimeInSec();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#bucket SchServiceConnector#bucket}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.dimensions"></a>

```java
public java.lang.Object getDimensions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>>

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#dimensions SchServiceConnector#dimensions}

---

##### `enableFormattedMessaging`<sup>Optional</sup> <a name="enableFormattedMessaging" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.enableFormattedMessaging"></a>

```java
public java.lang.Object getEnableFormattedMessaging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#enable_formatted_messaging SchServiceConnector#enable_formatted_messaging}.

---

##### `functionId`<sup>Optional</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}.

---

##### `logGroupId`<sup>Optional</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}.

---

##### `logSourceIdentifier`<sup>Optional</sup> <a name="logSourceIdentifier" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.logSourceIdentifier"></a>

```java
public java.lang.String getLogSourceIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_source_identifier SchServiceConnector#log_source_identifier}.

---

##### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric SchServiceConnector#metric}.

---

##### `metricNamespace`<sup>Optional</sup> <a name="metricNamespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.metricNamespace"></a>

```java
public java.lang.String getMetricNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric_namespace SchServiceConnector#metric_namespace}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}.

---

##### `objectNamePrefix`<sup>Optional</sup> <a name="objectNamePrefix" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.objectNamePrefix"></a>

```java
public java.lang.String getObjectNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#object_name_prefix SchServiceConnector#object_name_prefix}.

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}.

---

##### `topicId`<sup>Optional</sup> <a name="topicId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.topicId"></a>

```java
public java.lang.String getTopicId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#topic_id SchServiceConnector#topic_id}.

---

### SchServiceConnectorTargetDimensions <a name="SchServiceConnectorTargetDimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorTargetDimensions;

SchServiceConnectorTargetDimensions.builder()
//  .dimensionValue(SchServiceConnectorTargetDimensionsDimensionValue)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.property.dimensionValue">dimensionValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a></code> | dimension_value block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#name SchServiceConnector#name}. |

---

##### `dimensionValue`<sup>Optional</sup> <a name="dimensionValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.property.dimensionValue"></a>

```java
public SchServiceConnectorTargetDimensionsDimensionValue getDimensionValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a>

dimension_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#dimension_value SchServiceConnector#dimension_value}

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#name SchServiceConnector#name}.

---

### SchServiceConnectorTargetDimensionsDimensionValue <a name="SchServiceConnectorTargetDimensionsDimensionValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorTargetDimensionsDimensionValue;

SchServiceConnectorTargetDimensionsDimensionValue.builder()
    .kind(java.lang.String)
//  .path(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#path SchServiceConnector#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#value SchServiceConnector#value}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#path SchServiceConnector#path}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#value SchServiceConnector#value}.

---

### SchServiceConnectorTasks <a name="SchServiceConnectorTasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorTasks;

SchServiceConnectorTasks.builder()
    .kind(java.lang.String)
//  .batchSizeInKbs(java.lang.Number)
//  .batchTimeInSec(java.lang.Number)
//  .condition(java.lang.String)
//  .functionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.batchSizeInKbs">batchSizeInKbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.batchTimeInSec">batchTimeInSec</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.condition">condition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#condition SchServiceConnector#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.functionId">functionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `batchSizeInKbs`<sup>Optional</sup> <a name="batchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.batchSizeInKbs"></a>

```java
public java.lang.Number getBatchSizeInKbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}.

---

##### `batchTimeInSec`<sup>Optional</sup> <a name="batchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.batchTimeInSec"></a>

```java
public java.lang.Number getBatchTimeInSec();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#condition SchServiceConnector#condition}.

---

##### `functionId`<sup>Optional</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}.

---

### SchServiceConnectorTimeouts <a name="SchServiceConnectorTimeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorTimeouts;

SchServiceConnectorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#create SchServiceConnector#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#delete SchServiceConnector#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#update SchServiceConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#create SchServiceConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#delete SchServiceConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#update SchServiceConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SchServiceConnectorSourceCursorOutputReference <a name="SchServiceConnectorSourceCursorOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorSourceCursorOutputReference;

new SchServiceConnectorSourceCursorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resetKind">resetKind</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKind` <a name="resetKind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resetKind"></a>

```java
public void resetKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.internalValue"></a>

```java
public SchServiceConnectorSourceCursor getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a>

---


### SchServiceConnectorSourceLogSourcesList <a name="SchServiceConnectorSourceLogSourcesList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorSourceLogSourcesList;

new SchServiceConnectorSourceLogSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.get"></a>

```java
public SchServiceConnectorSourceLogSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>>

---


### SchServiceConnectorSourceLogSourcesOutputReference <a name="SchServiceConnectorSourceLogSourcesOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorSourceLogSourcesOutputReference;

new SchServiceConnectorSourceLogSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetLogGroupId">resetLogGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetLogId">resetLogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetLogGroupId` <a name="resetLogGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetLogGroupId"></a>

```java
public void resetLogGroupId()
```

##### `resetLogId` <a name="resetLogId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetLogId"></a>

```java
public void resetLogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logGroupIdInput">logGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logIdInput">logIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logId">logId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logGroupIdInput"></a>

```java
public java.lang.String getLogGroupIdInput();
```

- *Type:* java.lang.String

---

##### `logIdInput`<sup>Optional</sup> <a name="logIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logIdInput"></a>

```java
public java.lang.String getLogIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logId"></a>

```java
public java.lang.String getLogId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>

---


### SchServiceConnectorSourceMonitoringSourcesList <a name="SchServiceConnectorSourceMonitoringSourcesList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorSourceMonitoringSourcesList;

new SchServiceConnectorSourceMonitoringSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.get"></a>

```java
public SchServiceConnectorSourceMonitoringSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>>

---


### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList;

new SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get"></a>

```java
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>>

---


### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference;

new SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue"></a>

```java
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

---


### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference;

new SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.putMetrics">putMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetrics` <a name="putMetrics" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.putMetrics"></a>

```java
public void putMetrics(SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.putMetrics.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metricsInput">metricsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics"></a>

```java
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference getMetrics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference</a>

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metricsInput"></a>

```java
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics getMetricsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>

---


### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference;

new SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.putNamespaces">putNamespaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNamespaces` <a name="putNamespaces" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.putNamespaces"></a>

```java
public void putNamespaces(IResolvable OR java.util.List<SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.putNamespaces.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces">namespaces</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespacesInput">namespacesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces"></a>

```java
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList getNamespaces();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList</a>

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespacesInput"></a>

```java
public java.lang.Object getNamespacesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>>

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue"></a>

```java
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

---


### SchServiceConnectorSourceMonitoringSourcesOutputReference <a name="SchServiceConnectorSourceMonitoringSourcesOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorSourceMonitoringSourcesOutputReference;

new SchServiceConnectorSourceMonitoringSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.putNamespaceDetails">putNamespaceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resetNamespaceDetails">resetNamespaceDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNamespaceDetails` <a name="putNamespaceDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.putNamespaceDetails"></a>

```java
public void putNamespaceDetails(SchServiceConnectorSourceMonitoringSourcesNamespaceDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.putNamespaceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetNamespaceDetails` <a name="resetNamespaceDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resetNamespaceDetails"></a>

```java
public void resetNamespaceDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetails">namespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetailsInput">namespaceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespaceDetails`<sup>Required</sup> <a name="namespaceDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetails"></a>

```java
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference getNamespaceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceDetailsInput`<sup>Optional</sup> <a name="namespaceDetailsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetailsInput"></a>

```java
public SchServiceConnectorSourceMonitoringSourcesNamespaceDetails getNamespaceDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>

---


### SchServiceConnectorSourceOutputReference <a name="SchServiceConnectorSourceOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorSourceOutputReference;

new SchServiceConnectorSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putCursor">putCursor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putLogSources">putLogSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putMonitoringSources">putMonitoringSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetConfigMap">resetConfigMap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetCursor">resetCursor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetLogSources">resetLogSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetMonitoringSources">resetMonitoringSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetStreamId">resetStreamId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCursor` <a name="putCursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putCursor"></a>

```java
public void putCursor(SchServiceConnectorSourceCursor value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putCursor.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a>

---

##### `putLogSources` <a name="putLogSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putLogSources"></a>

```java
public void putLogSources(IResolvable OR java.util.List<SchServiceConnectorSourceLogSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putLogSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>>

---

##### `putMonitoringSources` <a name="putMonitoringSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putMonitoringSources"></a>

```java
public void putMonitoringSources(IResolvable OR java.util.List<SchServiceConnectorSourceMonitoringSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putMonitoringSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>>

---

##### `resetConfigMap` <a name="resetConfigMap" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetConfigMap"></a>

```java
public void resetConfigMap()
```

##### `resetCursor` <a name="resetCursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetCursor"></a>

```java
public void resetCursor()
```

##### `resetLogSources` <a name="resetLogSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetLogSources"></a>

```java
public void resetLogSources()
```

##### `resetMonitoringSources` <a name="resetMonitoringSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetMonitoringSources"></a>

```java
public void resetMonitoringSources()
```

##### `resetPluginName` <a name="resetPluginName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetPluginName"></a>

```java
public void resetPluginName()
```

##### `resetStreamId` <a name="resetStreamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetStreamId"></a>

```java
public void resetStreamId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.cursor">cursor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference">SchServiceConnectorSourceCursorOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.logSources">logSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList">SchServiceConnectorSourceLogSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.monitoringSources">monitoringSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList">SchServiceConnectorSourceMonitoringSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.configMapInput">configMapInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.cursorInput">cursorInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.logSourcesInput">logSourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.monitoringSourcesInput">monitoringSourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.streamIdInput">streamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.configMap">configMap</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.pluginName">pluginName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.streamId">streamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cursor`<sup>Required</sup> <a name="cursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.cursor"></a>

```java
public SchServiceConnectorSourceCursorOutputReference getCursor();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference">SchServiceConnectorSourceCursorOutputReference</a>

---

##### `logSources`<sup>Required</sup> <a name="logSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.logSources"></a>

```java
public SchServiceConnectorSourceLogSourcesList getLogSources();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList">SchServiceConnectorSourceLogSourcesList</a>

---

##### `monitoringSources`<sup>Required</sup> <a name="monitoringSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.monitoringSources"></a>

```java
public SchServiceConnectorSourceMonitoringSourcesList getMonitoringSources();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList">SchServiceConnectorSourceMonitoringSourcesList</a>

---

##### `configMapInput`<sup>Optional</sup> <a name="configMapInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.configMapInput"></a>

```java
public java.lang.String getConfigMapInput();
```

- *Type:* java.lang.String

---

##### `cursorInput`<sup>Optional</sup> <a name="cursorInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.cursorInput"></a>

```java
public SchServiceConnectorSourceCursor getCursorInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a>

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `logSourcesInput`<sup>Optional</sup> <a name="logSourcesInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.logSourcesInput"></a>

```java
public java.lang.Object getLogSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>>

---

##### `monitoringSourcesInput`<sup>Optional</sup> <a name="monitoringSourcesInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.monitoringSourcesInput"></a>

```java
public java.lang.Object getMonitoringSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>>

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.pluginNameInput"></a>

```java
public java.lang.String getPluginNameInput();
```

- *Type:* java.lang.String

---

##### `streamIdInput`<sup>Optional</sup> <a name="streamIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.streamIdInput"></a>

```java
public java.lang.String getStreamIdInput();
```

- *Type:* java.lang.String

---

##### `configMap`<sup>Required</sup> <a name="configMap" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.configMap"></a>

```java
public java.lang.String getConfigMap();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.pluginName"></a>

```java
public java.lang.String getPluginName();
```

- *Type:* java.lang.String

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.internalValue"></a>

```java
public SchServiceConnectorSource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a>

---


### SchServiceConnectorTargetDimensionsDimensionValueOutputReference <a name="SchServiceConnectorTargetDimensionsDimensionValueOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference;

new SchServiceConnectorTargetDimensionsDimensionValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.internalValue"></a>

```java
public SchServiceConnectorTargetDimensionsDimensionValue getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a>

---


### SchServiceConnectorTargetDimensionsList <a name="SchServiceConnectorTargetDimensionsList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorTargetDimensionsList;

new SchServiceConnectorTargetDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.get"></a>

```java
public SchServiceConnectorTargetDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>>

---


### SchServiceConnectorTargetDimensionsOutputReference <a name="SchServiceConnectorTargetDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorTargetDimensionsOutputReference;

new SchServiceConnectorTargetDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.putDimensionValue">putDimensionValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resetDimensionValue">resetDimensionValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensionValue` <a name="putDimensionValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.putDimensionValue"></a>

```java
public void putDimensionValue(SchServiceConnectorTargetDimensionsDimensionValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.putDimensionValue.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a>

---

##### `resetDimensionValue` <a name="resetDimensionValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resetDimensionValue"></a>

```java
public void resetDimensionValue()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.dimensionValue">dimensionValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference">SchServiceConnectorTargetDimensionsDimensionValueOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.dimensionValueInput">dimensionValueInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensionValue`<sup>Required</sup> <a name="dimensionValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.dimensionValue"></a>

```java
public SchServiceConnectorTargetDimensionsDimensionValueOutputReference getDimensionValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference">SchServiceConnectorTargetDimensionsDimensionValueOutputReference</a>

---

##### `dimensionValueInput`<sup>Optional</sup> <a name="dimensionValueInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.dimensionValueInput"></a>

```java
public SchServiceConnectorTargetDimensionsDimensionValue getDimensionValueInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>

---


### SchServiceConnectorTargetOutputReference <a name="SchServiceConnectorTargetOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorTargetOutputReference;

new SchServiceConnectorTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchRolloverSizeInMbs">resetBatchRolloverSizeInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchRolloverTimeInMs">resetBatchRolloverTimeInMs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchSizeInKbs">resetBatchSizeInKbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchSizeInNum">resetBatchSizeInNum</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchTimeInSec">resetBatchTimeInSec</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetEnableFormattedMessaging">resetEnableFormattedMessaging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetFunctionId">resetFunctionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetLogGroupId">resetLogGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetLogSourceIdentifier">resetLogSourceIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetMetricNamespace">resetMetricNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetObjectNamePrefix">resetObjectNamePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetStreamId">resetStreamId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetTopicId">resetTopicId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.putDimensions"></a>

```java
public void putDimensions(IResolvable OR java.util.List<SchServiceConnectorTargetDimensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.putDimensions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>>

---

##### `resetBatchRolloverSizeInMbs` <a name="resetBatchRolloverSizeInMbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchRolloverSizeInMbs"></a>

```java
public void resetBatchRolloverSizeInMbs()
```

##### `resetBatchRolloverTimeInMs` <a name="resetBatchRolloverTimeInMs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchRolloverTimeInMs"></a>

```java
public void resetBatchRolloverTimeInMs()
```

##### `resetBatchSizeInKbs` <a name="resetBatchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchSizeInKbs"></a>

```java
public void resetBatchSizeInKbs()
```

##### `resetBatchSizeInNum` <a name="resetBatchSizeInNum" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchSizeInNum"></a>

```java
public void resetBatchSizeInNum()
```

##### `resetBatchTimeInSec` <a name="resetBatchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchTimeInSec"></a>

```java
public void resetBatchTimeInSec()
```

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDimensions` <a name="resetDimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetEnableFormattedMessaging` <a name="resetEnableFormattedMessaging" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetEnableFormattedMessaging"></a>

```java
public void resetEnableFormattedMessaging()
```

##### `resetFunctionId` <a name="resetFunctionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetFunctionId"></a>

```java
public void resetFunctionId()
```

##### `resetLogGroupId` <a name="resetLogGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetLogGroupId"></a>

```java
public void resetLogGroupId()
```

##### `resetLogSourceIdentifier` <a name="resetLogSourceIdentifier" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetLogSourceIdentifier"></a>

```java
public void resetLogSourceIdentifier()
```

##### `resetMetric` <a name="resetMetric" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetMetric"></a>

```java
public void resetMetric()
```

##### `resetMetricNamespace` <a name="resetMetricNamespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetMetricNamespace"></a>

```java
public void resetMetricNamespace()
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetObjectNamePrefix` <a name="resetObjectNamePrefix" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetObjectNamePrefix"></a>

```java
public void resetObjectNamePrefix()
```

##### `resetStreamId` <a name="resetStreamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetStreamId"></a>

```java
public void resetStreamId()
```

##### `resetTopicId` <a name="resetTopicId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetTopicId"></a>

```java
public void resetTopicId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList">SchServiceConnectorTargetDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbsInput">batchRolloverSizeInMbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMsInput">batchRolloverTimeInMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInKbsInput">batchSizeInKbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInNumInput">batchSizeInNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchTimeInSecInput">batchTimeInSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.enableFormattedMessagingInput">enableFormattedMessagingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.functionIdInput">functionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logGroupIdInput">logGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logSourceIdentifierInput">logSourceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricInput">metricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricNamespaceInput">metricNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.objectNamePrefixInput">objectNamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.streamIdInput">streamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.topicIdInput">topicIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbs">batchRolloverSizeInMbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMs">batchRolloverTimeInMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInKbs">batchSizeInKbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInNum">batchSizeInNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchTimeInSec">batchTimeInSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.enableFormattedMessaging">enableFormattedMessaging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.functionId">functionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logSourceIdentifier">logSourceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metric">metric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricNamespace">metricNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.objectNamePrefix">objectNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.streamId">streamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.topicId">topicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.dimensions"></a>

```java
public SchServiceConnectorTargetDimensionsList getDimensions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList">SchServiceConnectorTargetDimensionsList</a>

---

##### `batchRolloverSizeInMbsInput`<sup>Optional</sup> <a name="batchRolloverSizeInMbsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbsInput"></a>

```java
public java.lang.Number getBatchRolloverSizeInMbsInput();
```

- *Type:* java.lang.Number

---

##### `batchRolloverTimeInMsInput`<sup>Optional</sup> <a name="batchRolloverTimeInMsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMsInput"></a>

```java
public java.lang.Number getBatchRolloverTimeInMsInput();
```

- *Type:* java.lang.Number

---

##### `batchSizeInKbsInput`<sup>Optional</sup> <a name="batchSizeInKbsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInKbsInput"></a>

```java
public java.lang.Number getBatchSizeInKbsInput();
```

- *Type:* java.lang.Number

---

##### `batchSizeInNumInput`<sup>Optional</sup> <a name="batchSizeInNumInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInNumInput"></a>

```java
public java.lang.Number getBatchSizeInNumInput();
```

- *Type:* java.lang.Number

---

##### `batchTimeInSecInput`<sup>Optional</sup> <a name="batchTimeInSecInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchTimeInSecInput"></a>

```java
public java.lang.Number getBatchTimeInSecInput();
```

- *Type:* java.lang.Number

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.dimensionsInput"></a>

```java
public java.lang.Object getDimensionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>>

---

##### `enableFormattedMessagingInput`<sup>Optional</sup> <a name="enableFormattedMessagingInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.enableFormattedMessagingInput"></a>

```java
public java.lang.Object getEnableFormattedMessagingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `functionIdInput`<sup>Optional</sup> <a name="functionIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.functionIdInput"></a>

```java
public java.lang.String getFunctionIdInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logGroupIdInput"></a>

```java
public java.lang.String getLogGroupIdInput();
```

- *Type:* java.lang.String

---

##### `logSourceIdentifierInput`<sup>Optional</sup> <a name="logSourceIdentifierInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logSourceIdentifierInput"></a>

```java
public java.lang.String getLogSourceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricInput"></a>

```java
public java.lang.String getMetricInput();
```

- *Type:* java.lang.String

---

##### `metricNamespaceInput`<sup>Optional</sup> <a name="metricNamespaceInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricNamespaceInput"></a>

```java
public java.lang.String getMetricNamespaceInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `objectNamePrefixInput`<sup>Optional</sup> <a name="objectNamePrefixInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.objectNamePrefixInput"></a>

```java
public java.lang.String getObjectNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `streamIdInput`<sup>Optional</sup> <a name="streamIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.streamIdInput"></a>

```java
public java.lang.String getStreamIdInput();
```

- *Type:* java.lang.String

---

##### `topicIdInput`<sup>Optional</sup> <a name="topicIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.topicIdInput"></a>

```java
public java.lang.String getTopicIdInput();
```

- *Type:* java.lang.String

---

##### `batchRolloverSizeInMbs`<sup>Required</sup> <a name="batchRolloverSizeInMbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbs"></a>

```java
public java.lang.Number getBatchRolloverSizeInMbs();
```

- *Type:* java.lang.Number

---

##### `batchRolloverTimeInMs`<sup>Required</sup> <a name="batchRolloverTimeInMs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMs"></a>

```java
public java.lang.Number getBatchRolloverTimeInMs();
```

- *Type:* java.lang.Number

---

##### `batchSizeInKbs`<sup>Required</sup> <a name="batchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInKbs"></a>

```java
public java.lang.Number getBatchSizeInKbs();
```

- *Type:* java.lang.Number

---

##### `batchSizeInNum`<sup>Required</sup> <a name="batchSizeInNum" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInNum"></a>

```java
public java.lang.Number getBatchSizeInNum();
```

- *Type:* java.lang.Number

---

##### `batchTimeInSec`<sup>Required</sup> <a name="batchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchTimeInSec"></a>

```java
public java.lang.Number getBatchTimeInSec();
```

- *Type:* java.lang.Number

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `enableFormattedMessaging`<sup>Required</sup> <a name="enableFormattedMessaging" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.enableFormattedMessaging"></a>

```java
public java.lang.Object getEnableFormattedMessaging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

---

##### `logSourceIdentifier`<sup>Required</sup> <a name="logSourceIdentifier" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logSourceIdentifier"></a>

```java
public java.lang.String getLogSourceIdentifier();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricNamespace"></a>

```java
public java.lang.String getMetricNamespace();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `objectNamePrefix`<sup>Required</sup> <a name="objectNamePrefix" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.objectNamePrefix"></a>

```java
public java.lang.String getObjectNamePrefix();
```

- *Type:* java.lang.String

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.topicId"></a>

```java
public java.lang.String getTopicId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.internalValue"></a>

```java
public SchServiceConnectorTarget getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a>

---


### SchServiceConnectorTasksList <a name="SchServiceConnectorTasksList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorTasksList;

new SchServiceConnectorTasksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.get"></a>

```java
public SchServiceConnectorTasksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>>

---


### SchServiceConnectorTasksOutputReference <a name="SchServiceConnectorTasksOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorTasksOutputReference;

new SchServiceConnectorTasksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetBatchSizeInKbs">resetBatchSizeInKbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetBatchTimeInSec">resetBatchTimeInSec</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetFunctionId">resetFunctionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchSizeInKbs` <a name="resetBatchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetBatchSizeInKbs"></a>

```java
public void resetBatchSizeInKbs()
```

##### `resetBatchTimeInSec` <a name="resetBatchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetBatchTimeInSec"></a>

```java
public void resetBatchTimeInSec()
```

##### `resetCondition` <a name="resetCondition" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetFunctionId` <a name="resetFunctionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetFunctionId"></a>

```java
public void resetFunctionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchSizeInKbsInput">batchSizeInKbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchTimeInSecInput">batchTimeInSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.functionIdInput">functionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchSizeInKbs">batchSizeInKbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchTimeInSec">batchTimeInSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.functionId">functionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchSizeInKbsInput`<sup>Optional</sup> <a name="batchSizeInKbsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchSizeInKbsInput"></a>

```java
public java.lang.Number getBatchSizeInKbsInput();
```

- *Type:* java.lang.Number

---

##### `batchTimeInSecInput`<sup>Optional</sup> <a name="batchTimeInSecInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchTimeInSecInput"></a>

```java
public java.lang.Number getBatchTimeInSecInput();
```

- *Type:* java.lang.Number

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `functionIdInput`<sup>Optional</sup> <a name="functionIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.functionIdInput"></a>

```java
public java.lang.String getFunctionIdInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `batchSizeInKbs`<sup>Required</sup> <a name="batchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchSizeInKbs"></a>

```java
public java.lang.Number getBatchSizeInKbs();
```

- *Type:* java.lang.Number

---

##### `batchTimeInSec`<sup>Required</sup> <a name="batchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchTimeInSec"></a>

```java
public java.lang.Number getBatchTimeInSec();
```

- *Type:* java.lang.Number

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>

---


### SchServiceConnectorTimeoutsOutputReference <a name="SchServiceConnectorTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.sch_service_connector.SchServiceConnectorTimeoutsOutputReference;

new SchServiceConnectorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a>

---



