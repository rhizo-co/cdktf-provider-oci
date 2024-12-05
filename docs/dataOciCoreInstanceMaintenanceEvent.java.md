# `dataOciCoreInstanceMaintenanceEvent` Submodule <a name="`dataOciCoreInstanceMaintenanceEvent` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreInstanceMaintenanceEvent <a name="DataOciCoreInstanceMaintenanceEvent" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_event oci_core_instance_maintenance_event}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_instance_maintenance_event.DataOciCoreInstanceMaintenanceEvent;

DataOciCoreInstanceMaintenanceEvent.Builder.create(Construct scope, java.lang.String id)
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
    .instanceMaintenanceEventId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.instanceMaintenanceEventId">instanceMaintenanceEventId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_event#instance_maintenance_event_id DataOciCoreInstanceMaintenanceEvent#instance_maintenance_event_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceMaintenanceEventId`<sup>Required</sup> <a name="instanceMaintenanceEventId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.instanceMaintenanceEventId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_event#instance_maintenance_event_id DataOciCoreInstanceMaintenanceEvent#instance_maintenance_event_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreInstanceMaintenanceEvent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_instance_maintenance_event.DataOciCoreInstanceMaintenanceEvent;

DataOciCoreInstanceMaintenanceEvent.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_instance_maintenance_event.DataOciCoreInstanceMaintenanceEvent;

DataOciCoreInstanceMaintenanceEvent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_instance_maintenance_event.DataOciCoreInstanceMaintenanceEvent;

DataOciCoreInstanceMaintenanceEvent.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_instance_maintenance_event.DataOciCoreInstanceMaintenanceEvent;

DataOciCoreInstanceMaintenanceEvent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreInstanceMaintenanceEvent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreInstanceMaintenanceEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreInstanceMaintenanceEvent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreInstanceMaintenanceEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreInstanceMaintenanceEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.additionalDetails">additionalDetails</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.alternativeResolutionAction">alternativeResolutionAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.alternativeResolutionActions">alternativeResolutionActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.canDeleteLocalStorage">canDeleteLocalStorage</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.canReschedule">canReschedule</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.correlationToken">correlationToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.estimatedDuration">estimatedDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceAction">instanceAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.maintenanceCategory">maintenanceCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.maintenanceReason">maintenanceReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.startWindowDuration">startWindowDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeFinished">timeFinished</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeHardDueDate">timeHardDueDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeWindowStart">timeWindowStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceMaintenanceEventIdInput">instanceMaintenanceEventIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceMaintenanceEventId">instanceMaintenanceEventId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.additionalDetails"></a>

```java
public StringMap getAdditionalDetails();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `alternativeResolutionAction`<sup>Required</sup> <a name="alternativeResolutionAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.alternativeResolutionAction"></a>

```java
public java.lang.String getAlternativeResolutionAction();
```

- *Type:* java.lang.String

---

##### `alternativeResolutionActions`<sup>Required</sup> <a name="alternativeResolutionActions" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.alternativeResolutionActions"></a>

```java
public java.util.List<java.lang.String> getAlternativeResolutionActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `canDeleteLocalStorage`<sup>Required</sup> <a name="canDeleteLocalStorage" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.canDeleteLocalStorage"></a>

```java
public IResolvable getCanDeleteLocalStorage();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `canReschedule`<sup>Required</sup> <a name="canReschedule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.canReschedule"></a>

```java
public IResolvable getCanReschedule();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `correlationToken`<sup>Required</sup> <a name="correlationToken" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.correlationToken"></a>

```java
public java.lang.String getCorrelationToken();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `estimatedDuration`<sup>Required</sup> <a name="estimatedDuration" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.estimatedDuration"></a>

```java
public java.lang.String getEstimatedDuration();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceAction`<sup>Required</sup> <a name="instanceAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceAction"></a>

```java
public java.lang.String getInstanceAction();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `maintenanceCategory`<sup>Required</sup> <a name="maintenanceCategory" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.maintenanceCategory"></a>

```java
public java.lang.String getMaintenanceCategory();
```

- *Type:* java.lang.String

---

##### `maintenanceReason`<sup>Required</sup> <a name="maintenanceReason" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.maintenanceReason"></a>

```java
public java.lang.String getMaintenanceReason();
```

- *Type:* java.lang.String

---

##### `startWindowDuration`<sup>Required</sup> <a name="startWindowDuration" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.startWindowDuration"></a>

```java
public java.lang.String getStartWindowDuration();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeFinished"></a>

```java
public java.lang.String getTimeFinished();
```

- *Type:* java.lang.String

---

##### `timeHardDueDate`<sup>Required</sup> <a name="timeHardDueDate" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeHardDueDate"></a>

```java
public java.lang.String getTimeHardDueDate();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `timeWindowStart`<sup>Required</sup> <a name="timeWindowStart" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeWindowStart"></a>

```java
public java.lang.String getTimeWindowStart();
```

- *Type:* java.lang.String

---

##### `instanceMaintenanceEventIdInput`<sup>Optional</sup> <a name="instanceMaintenanceEventIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceMaintenanceEventIdInput"></a>

```java
public java.lang.String getInstanceMaintenanceEventIdInput();
```

- *Type:* java.lang.String

---

##### `instanceMaintenanceEventId`<sup>Required</sup> <a name="instanceMaintenanceEventId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceMaintenanceEventId"></a>

```java
public java.lang.String getInstanceMaintenanceEventId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreInstanceMaintenanceEventConfig <a name="DataOciCoreInstanceMaintenanceEventConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_instance_maintenance_event.DataOciCoreInstanceMaintenanceEventConfig;

DataOciCoreInstanceMaintenanceEventConfig.builder()
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
    .instanceMaintenanceEventId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.instanceMaintenanceEventId">instanceMaintenanceEventId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_event#instance_maintenance_event_id DataOciCoreInstanceMaintenanceEvent#instance_maintenance_event_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceMaintenanceEventId`<sup>Required</sup> <a name="instanceMaintenanceEventId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.instanceMaintenanceEventId"></a>

```java
public java.lang.String getInstanceMaintenanceEventId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_event#instance_maintenance_event_id DataOciCoreInstanceMaintenanceEvent#instance_maintenance_event_id}.

---



