# `dataOciStackMonitoringMaintenanceWindow` Submodule <a name="`dataOciStackMonitoringMaintenanceWindow` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMaintenanceWindow <a name="DataOciStackMonitoringMaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_window oci_stack_monitoring_maintenance_window}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_window.DataOciStackMonitoringMaintenanceWindow;

DataOciStackMonitoringMaintenanceWindow.Builder.create(Construct scope, java.lang.String id)
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
    .maintenanceWindowId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.maintenanceWindowId">maintenanceWindowId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_window#maintenance_window_id DataOciStackMonitoringMaintenanceWindow#maintenance_window_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `maintenanceWindowId`<sup>Required</sup> <a name="maintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.Initializer.parameter.maintenanceWindowId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_window#maintenance_window_id DataOciStackMonitoringMaintenanceWindow#maintenance_window_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMaintenanceWindow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_window.DataOciStackMonitoringMaintenanceWindow;

DataOciStackMonitoringMaintenanceWindow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_window.DataOciStackMonitoringMaintenanceWindow;

DataOciStackMonitoringMaintenanceWindow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_window.DataOciStackMonitoringMaintenanceWindow;

DataOciStackMonitoringMaintenanceWindow.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_window.DataOciStackMonitoringMaintenanceWindow;

DataOciStackMonitoringMaintenanceWindow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciStackMonitoringMaintenanceWindow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciStackMonitoringMaintenanceWindow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciStackMonitoringMaintenanceWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciStackMonitoringMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.resources">resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList">DataOciStackMonitoringMaintenanceWindowResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.resourcesDetails">resourcesDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList">DataOciStackMonitoringMaintenanceWindowResourcesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList">DataOciStackMonitoringMaintenanceWindowScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.maintenanceWindowIdInput">maintenanceWindowIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.maintenanceWindowId">maintenanceWindowId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.resources"></a>

```java
public DataOciStackMonitoringMaintenanceWindowResourcesList getResources();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList">DataOciStackMonitoringMaintenanceWindowResourcesList</a>

---

##### `resourcesDetails`<sup>Required</sup> <a name="resourcesDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.resourcesDetails"></a>

```java
public DataOciStackMonitoringMaintenanceWindowResourcesDetailsList getResourcesDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList">DataOciStackMonitoringMaintenanceWindowResourcesDetailsList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.schedule"></a>

```java
public DataOciStackMonitoringMaintenanceWindowScheduleList getSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList">DataOciStackMonitoringMaintenanceWindowScheduleList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowIdInput`<sup>Optional</sup> <a name="maintenanceWindowIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.maintenanceWindowIdInput"></a>

```java
public java.lang.String getMaintenanceWindowIdInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowId`<sup>Required</sup> <a name="maintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.maintenanceWindowId"></a>

```java
public java.lang.String getMaintenanceWindowId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMaintenanceWindowConfig <a name="DataOciStackMonitoringMaintenanceWindowConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_window.DataOciStackMonitoringMaintenanceWindowConfig;

DataOciStackMonitoringMaintenanceWindowConfig.builder()
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
    .maintenanceWindowId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig.property.maintenanceWindowId">maintenanceWindowId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_window#maintenance_window_id DataOciStackMonitoringMaintenanceWindow#maintenance_window_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `maintenanceWindowId`<sup>Required</sup> <a name="maintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowConfig.property.maintenanceWindowId"></a>

```java
public java.lang.String getMaintenanceWindowId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_window#maintenance_window_id DataOciStackMonitoringMaintenanceWindow#maintenance_window_id}.

---

### DataOciStackMonitoringMaintenanceWindowResources <a name="DataOciStackMonitoringMaintenanceWindowResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_window.DataOciStackMonitoringMaintenanceWindowResources;

DataOciStackMonitoringMaintenanceWindowResources.builder()
    .build();
```


### DataOciStackMonitoringMaintenanceWindowResourcesDetails <a name="DataOciStackMonitoringMaintenanceWindowResourcesDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_window.DataOciStackMonitoringMaintenanceWindowResourcesDetails;

DataOciStackMonitoringMaintenanceWindowResourcesDetails.builder()
    .build();
```


### DataOciStackMonitoringMaintenanceWindowSchedule <a name="DataOciStackMonitoringMaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_window.DataOciStackMonitoringMaintenanceWindowSchedule;

DataOciStackMonitoringMaintenanceWindowSchedule.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMaintenanceWindowResourcesDetailsList <a name="DataOciStackMonitoringMaintenanceWindowResourcesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_window.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList;

new DataOciStackMonitoringMaintenanceWindowResourcesDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.get"></a>

```java
public DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference <a name="DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_window.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference;

new DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.numberOfMembers">numberOfMembers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetails">DataOciStackMonitoringMaintenanceWindowResourcesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `numberOfMembers`<sup>Required</sup> <a name="numberOfMembers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.numberOfMembers"></a>

```java
public java.lang.Number getNumberOfMembers();
```

- *Type:* java.lang.Number

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMaintenanceWindowResourcesDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesDetails">DataOciStackMonitoringMaintenanceWindowResourcesDetails</a>

---


### DataOciStackMonitoringMaintenanceWindowResourcesList <a name="DataOciStackMonitoringMaintenanceWindowResourcesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_window.DataOciStackMonitoringMaintenanceWindowResourcesList;

new DataOciStackMonitoringMaintenanceWindowResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.get"></a>

```java
public DataOciStackMonitoringMaintenanceWindowResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMaintenanceWindowResourcesOutputReference <a name="DataOciStackMonitoringMaintenanceWindowResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_window.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference;

new DataOciStackMonitoringMaintenanceWindowResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.property.areMembersIncluded">areMembersIncluded</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResources">DataOciStackMonitoringMaintenanceWindowResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `areMembersIncluded`<sup>Required</sup> <a name="areMembersIncluded" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.property.areMembersIncluded"></a>

```java
public IResolvable getAreMembersIncluded();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResourcesOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMaintenanceWindowResources getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowResources">DataOciStackMonitoringMaintenanceWindowResources</a>

---


### DataOciStackMonitoringMaintenanceWindowScheduleList <a name="DataOciStackMonitoringMaintenanceWindowScheduleList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_window.DataOciStackMonitoringMaintenanceWindowScheduleList;

new DataOciStackMonitoringMaintenanceWindowScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.get"></a>

```java
public DataOciStackMonitoringMaintenanceWindowScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMaintenanceWindowScheduleOutputReference <a name="DataOciStackMonitoringMaintenanceWindowScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_window.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference;

new DataOciStackMonitoringMaintenanceWindowScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowDuration">maintenanceWindowDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowRecurrences">maintenanceWindowRecurrences</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.property.scheduleType">scheduleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowEnd">timeMaintenanceWindowEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowStart">timeMaintenanceWindowStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowSchedule">DataOciStackMonitoringMaintenanceWindowSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowDuration`<sup>Required</sup> <a name="maintenanceWindowDuration" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowDuration"></a>

```java
public java.lang.String getMaintenanceWindowDuration();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowRecurrences`<sup>Required</sup> <a name="maintenanceWindowRecurrences" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowRecurrences"></a>

```java
public java.lang.String getMaintenanceWindowRecurrences();
```

- *Type:* java.lang.String

---

##### `scheduleType`<sup>Required</sup> <a name="scheduleType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.property.scheduleType"></a>

```java
public java.lang.String getScheduleType();
```

- *Type:* java.lang.String

---

##### `timeMaintenanceWindowEnd`<sup>Required</sup> <a name="timeMaintenanceWindowEnd" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowEnd"></a>

```java
public java.lang.String getTimeMaintenanceWindowEnd();
```

- *Type:* java.lang.String

---

##### `timeMaintenanceWindowStart`<sup>Required</sup> <a name="timeMaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowStart"></a>

```java
public java.lang.String getTimeMaintenanceWindowStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowScheduleOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMaintenanceWindowSchedule getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindow.DataOciStackMonitoringMaintenanceWindowSchedule">DataOciStackMonitoringMaintenanceWindowSchedule</a>

---



