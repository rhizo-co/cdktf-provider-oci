# `stackMonitoringMetricExtensionsTestManagement` Submodule <a name="`stackMonitoringMetricExtensionsTestManagement` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMetricExtensionsTestManagement <a name="StackMonitoringMetricExtensionsTestManagement" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management oci_stack_monitoring_metric_extensions_test_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_metric_extensions_test_management.StackMonitoringMetricExtensionsTestManagement;

StackMonitoringMetricExtensionsTestManagement.Builder.create(Construct scope, java.lang.String id)
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
    .metricExtensionId(java.lang.String)
    .resourceIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(StackMonitoringMetricExtensionsTestManagementTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.metricExtensionId">metricExtensionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#metric_extension_id StackMonitoringMetricExtensionsTestManagement#metric_extension_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.resourceIds">resourceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#resource_ids StackMonitoringMetricExtensionsTestManagement#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#id StackMonitoringMetricExtensionsTestManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metricExtensionId`<sup>Required</sup> <a name="metricExtensionId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.metricExtensionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#metric_extension_id StackMonitoringMetricExtensionsTestManagement#metric_extension_id}.

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.resourceIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#resource_ids StackMonitoringMetricExtensionsTestManagement#resource_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#id StackMonitoringMetricExtensionsTestManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#timeouts StackMonitoringMetricExtensionsTestManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.putTimeouts"></a>

```java
public void putTimeouts(StackMonitoringMetricExtensionsTestManagementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMetricExtensionsTestManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_metric_extensions_test_management.StackMonitoringMetricExtensionsTestManagement;

StackMonitoringMetricExtensionsTestManagement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_metric_extensions_test_management.StackMonitoringMetricExtensionsTestManagement;

StackMonitoringMetricExtensionsTestManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_metric_extensions_test_management.StackMonitoringMetricExtensionsTestManagement;

StackMonitoringMetricExtensionsTestManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_metric_extensions_test_management.StackMonitoringMetricExtensionsTestManagement;

StackMonitoringMetricExtensionsTestManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StackMonitoringMetricExtensionsTestManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StackMonitoringMetricExtensionsTestManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StackMonitoringMetricExtensionsTestManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StackMonitoringMetricExtensionsTestManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMetricExtensionsTestManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunId">testRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunMetricSuffix">testRunMetricSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunNamespaceName">testRunNamespaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunResourceGroupName">testRunResourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference">StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.metricExtensionIdInput">metricExtensionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.resourceIdsInput">resourceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.metricExtensionId">metricExtensionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.resourceIds">resourceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `testRunId`<sup>Required</sup> <a name="testRunId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunId"></a>

```java
public java.lang.String getTestRunId();
```

- *Type:* java.lang.String

---

##### `testRunMetricSuffix`<sup>Required</sup> <a name="testRunMetricSuffix" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunMetricSuffix"></a>

```java
public java.lang.String getTestRunMetricSuffix();
```

- *Type:* java.lang.String

---

##### `testRunNamespaceName`<sup>Required</sup> <a name="testRunNamespaceName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunNamespaceName"></a>

```java
public java.lang.String getTestRunNamespaceName();
```

- *Type:* java.lang.String

---

##### `testRunResourceGroupName`<sup>Required</sup> <a name="testRunResourceGroupName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunResourceGroupName"></a>

```java
public java.lang.String getTestRunResourceGroupName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.timeouts"></a>

```java
public StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference">StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metricExtensionIdInput`<sup>Optional</sup> <a name="metricExtensionIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.metricExtensionIdInput"></a>

```java
public java.lang.String getMetricExtensionIdInput();
```

- *Type:* java.lang.String

---

##### `resourceIdsInput`<sup>Optional</sup> <a name="resourceIdsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.resourceIdsInput"></a>

```java
public java.util.List<java.lang.String> getResourceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricExtensionId`<sup>Required</sup> <a name="metricExtensionId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.metricExtensionId"></a>

```java
public java.lang.String getMetricExtensionId();
```

- *Type:* java.lang.String

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.resourceIds"></a>

```java
public java.util.List<java.lang.String> getResourceIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMetricExtensionsTestManagementConfig <a name="StackMonitoringMetricExtensionsTestManagementConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_metric_extensions_test_management.StackMonitoringMetricExtensionsTestManagementConfig;

StackMonitoringMetricExtensionsTestManagementConfig.builder()
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
    .metricExtensionId(java.lang.String)
    .resourceIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(StackMonitoringMetricExtensionsTestManagementTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.metricExtensionId">metricExtensionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#metric_extension_id StackMonitoringMetricExtensionsTestManagement#metric_extension_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.resourceIds">resourceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#resource_ids StackMonitoringMetricExtensionsTestManagement#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#id StackMonitoringMetricExtensionsTestManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metricExtensionId`<sup>Required</sup> <a name="metricExtensionId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.metricExtensionId"></a>

```java
public java.lang.String getMetricExtensionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#metric_extension_id StackMonitoringMetricExtensionsTestManagement#metric_extension_id}.

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.resourceIds"></a>

```java
public java.util.List<java.lang.String> getResourceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#resource_ids StackMonitoringMetricExtensionsTestManagement#resource_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#id StackMonitoringMetricExtensionsTestManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.timeouts"></a>

```java
public StackMonitoringMetricExtensionsTestManagementTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#timeouts StackMonitoringMetricExtensionsTestManagement#timeouts}

---

### StackMonitoringMetricExtensionsTestManagementTimeouts <a name="StackMonitoringMetricExtensionsTestManagementTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_metric_extensions_test_management.StackMonitoringMetricExtensionsTestManagementTimeouts;

StackMonitoringMetricExtensionsTestManagementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#create StackMonitoringMetricExtensionsTestManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#delete StackMonitoringMetricExtensionsTestManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#update StackMonitoringMetricExtensionsTestManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#create StackMonitoringMetricExtensionsTestManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#delete StackMonitoringMetricExtensionsTestManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#update StackMonitoringMetricExtensionsTestManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference <a name="StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_metric_extensions_test_management.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference;

new StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a>

---



