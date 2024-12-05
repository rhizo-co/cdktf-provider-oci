# `dataOciMonitoringAlarmSuppressions` Submodule <a name="`dataOciMonitoringAlarmSuppressions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMonitoringAlarmSuppressions <a name="DataOciMonitoringAlarmSuppressions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions oci_monitoring_alarm_suppressions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressions;

DataOciMonitoringAlarmSuppressions.Builder.create(Construct scope, java.lang.String id)
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
//  .alarmId(java.lang.String)
//  .compartmentId(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciMonitoringAlarmSuppressionsFilter>)
//  .id(java.lang.String)
//  .isAllSuppressions(java.lang.Boolean)
//  .isAllSuppressions(IResolvable)
//  .level(java.lang.String)
//  .state(java.lang.String)
//  .targetType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.alarmId">alarmId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#alarm_id DataOciMonitoringAlarmSuppressions#alarm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id DataOciMonitoringAlarmSuppressions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id_in_subtree DataOciMonitoringAlarmSuppressions#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#display_name DataOciMonitoringAlarmSuppressions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#id DataOciMonitoringAlarmSuppressions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.isAllSuppressions">isAllSuppressions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#is_all_suppressions DataOciMonitoringAlarmSuppressions#is_all_suppressions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.level">level</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#level DataOciMonitoringAlarmSuppressions#level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#state DataOciMonitoringAlarmSuppressions#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.targetType">targetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#target_type DataOciMonitoringAlarmSuppressions#target_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alarmId`<sup>Optional</sup> <a name="alarmId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.alarmId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#alarm_id DataOciMonitoringAlarmSuppressions#alarm_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id DataOciMonitoringAlarmSuppressions#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id_in_subtree DataOciMonitoringAlarmSuppressions#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#display_name DataOciMonitoringAlarmSuppressions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#filter DataOciMonitoringAlarmSuppressions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#id DataOciMonitoringAlarmSuppressions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAllSuppressions`<sup>Optional</sup> <a name="isAllSuppressions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.isAllSuppressions"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#is_all_suppressions DataOciMonitoringAlarmSuppressions#is_all_suppressions}.

---

##### `level`<sup>Optional</sup> <a name="level" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.level"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#level DataOciMonitoringAlarmSuppressions#level}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#state DataOciMonitoringAlarmSuppressions#state}.

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.targetType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#target_type DataOciMonitoringAlarmSuppressions#target_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetAlarmId">resetAlarmId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetIsAllSuppressions">resetIsAllSuppressions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetTargetType">resetTargetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciMonitoringAlarmSuppressionsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>>

---

##### `resetAlarmId` <a name="resetAlarmId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetAlarmId"></a>

```java
public void resetAlarmId()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetCompartmentIdInSubtree"></a>

```java
public void resetCompartmentIdInSubtree()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetId"></a>

```java
public void resetId()
```

##### `resetIsAllSuppressions` <a name="resetIsAllSuppressions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetIsAllSuppressions"></a>

```java
public void resetIsAllSuppressions()
```

##### `resetLevel` <a name="resetLevel" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetLevel"></a>

```java
public void resetLevel()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetState"></a>

```java
public void resetState()
```

##### `resetTargetType` <a name="resetTargetType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetTargetType"></a>

```java
public void resetTargetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMonitoringAlarmSuppressions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressions;

DataOciMonitoringAlarmSuppressions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressions;

DataOciMonitoringAlarmSuppressions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressions;

DataOciMonitoringAlarmSuppressions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressions;

DataOciMonitoringAlarmSuppressions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciMonitoringAlarmSuppressions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciMonitoringAlarmSuppressions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciMonitoringAlarmSuppressions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciMonitoringAlarmSuppressions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMonitoringAlarmSuppressions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmSuppressionCollection">alarmSuppressionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList">DataOciMonitoringAlarmSuppressionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmIdInput">alarmIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.isAllSuppressionsInput">isAllSuppressionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.levelInput">levelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.targetTypeInput">targetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmId">alarmId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.isAllSuppressions">isAllSuppressions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `alarmSuppressionCollection`<sup>Required</sup> <a name="alarmSuppressionCollection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmSuppressionCollection"></a>

```java
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList getAlarmSuppressionCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.filter"></a>

```java
public DataOciMonitoringAlarmSuppressionsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList">DataOciMonitoringAlarmSuppressionsFilterList</a>

---

##### `alarmIdInput`<sup>Optional</sup> <a name="alarmIdInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmIdInput"></a>

```java
public java.lang.String getAlarmIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInSubtreeInput"></a>

```java
public java.lang.Object getCompartmentIdInSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isAllSuppressionsInput`<sup>Optional</sup> <a name="isAllSuppressionsInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.isAllSuppressionsInput"></a>

```java
public java.lang.Object getIsAllSuppressionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.levelInput"></a>

```java
public java.lang.String getLevelInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.targetTypeInput"></a>

```java
public java.lang.String getTargetTypeInput();
```

- *Type:* java.lang.String

---

##### `alarmId`<sup>Required</sup> <a name="alarmId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmId"></a>

```java
public java.lang.String getAlarmId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAllSuppressions`<sup>Required</sup> <a name="isAllSuppressions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.isAllSuppressions"></a>

```java
public java.lang.Object getIsAllSuppressions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `level`<sup>Required</sup> <a name="level" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection;

DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection.builder()
    .build();
```


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems;

DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems.builder()
    .build();
```


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget;

DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget.builder()
    .build();
```


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions;

DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions.builder()
    .build();
```


### DataOciMonitoringAlarmSuppressionsConfig <a name="DataOciMonitoringAlarmSuppressionsConfig" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressionsConfig;

DataOciMonitoringAlarmSuppressionsConfig.builder()
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
//  .alarmId(java.lang.String)
//  .compartmentId(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciMonitoringAlarmSuppressionsFilter>)
//  .id(java.lang.String)
//  .isAllSuppressions(java.lang.Boolean)
//  .isAllSuppressions(IResolvable)
//  .level(java.lang.String)
//  .state(java.lang.String)
//  .targetType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.alarmId">alarmId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#alarm_id DataOciMonitoringAlarmSuppressions#alarm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id DataOciMonitoringAlarmSuppressions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id_in_subtree DataOciMonitoringAlarmSuppressions#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#display_name DataOciMonitoringAlarmSuppressions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#id DataOciMonitoringAlarmSuppressions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.isAllSuppressions">isAllSuppressions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#is_all_suppressions DataOciMonitoringAlarmSuppressions#is_all_suppressions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.level">level</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#level DataOciMonitoringAlarmSuppressions#level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#state DataOciMonitoringAlarmSuppressions#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.targetType">targetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#target_type DataOciMonitoringAlarmSuppressions#target_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alarmId`<sup>Optional</sup> <a name="alarmId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.alarmId"></a>

```java
public java.lang.String getAlarmId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#alarm_id DataOciMonitoringAlarmSuppressions#alarm_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id DataOciMonitoringAlarmSuppressions#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id_in_subtree DataOciMonitoringAlarmSuppressions#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#display_name DataOciMonitoringAlarmSuppressions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#filter DataOciMonitoringAlarmSuppressions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#id DataOciMonitoringAlarmSuppressions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAllSuppressions`<sup>Optional</sup> <a name="isAllSuppressions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.isAllSuppressions"></a>

```java
public java.lang.Object getIsAllSuppressions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#is_all_suppressions DataOciMonitoringAlarmSuppressions#is_all_suppressions}.

---

##### `level`<sup>Optional</sup> <a name="level" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#level DataOciMonitoringAlarmSuppressions#level}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#state DataOciMonitoringAlarmSuppressions#state}.

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#target_type DataOciMonitoringAlarmSuppressions#target_type}.

---

### DataOciMonitoringAlarmSuppressionsFilter <a name="DataOciMonitoringAlarmSuppressionsFilter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressionsFilter;

DataOciMonitoringAlarmSuppressionsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#name DataOciMonitoringAlarmSuppressions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#values DataOciMonitoringAlarmSuppressions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#regex DataOciMonitoringAlarmSuppressions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#name DataOciMonitoringAlarmSuppressions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#values DataOciMonitoringAlarmSuppressions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#regex DataOciMonitoringAlarmSuppressions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.get"></a>

```java
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.alarmId">alarmId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmId`<sup>Required</sup> <a name="alarmId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.alarmId"></a>

```java
public java.lang.String getAlarmId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtree"></a>

```java
public IResolvable getCompartmentIdInSubtree();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.internalValue"></a>

```java
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget</a>

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.get"></a>

```java
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.alarmSuppressionTarget">alarmSuppressionTarget</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.suppressionConditions">suppressionConditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeSuppressFrom">timeSuppressFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeSuppressUntil">timeSuppressUntil</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmSuppressionTarget`<sup>Required</sup> <a name="alarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.alarmSuppressionTarget"></a>

```java
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList getAlarmSuppressionTarget();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.dimensions"></a>

```java
public StringMap getDimensions();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `suppressionConditions`<sup>Required</sup> <a name="suppressionConditions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.suppressionConditions"></a>

```java
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList getSuppressionConditions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeSuppressFrom`<sup>Required</sup> <a name="timeSuppressFrom" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeSuppressFrom"></a>

```java
public java.lang.String getTimeSuppressFrom();
```

- *Type:* java.lang.String

---

##### `timeSuppressUntil`<sup>Required</sup> <a name="timeSuppressUntil" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeSuppressUntil"></a>

```java
public java.lang.String getTimeSuppressUntil();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems</a>

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.get"></a>

```java
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.conditionType">conditionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.suppressionDuration">suppressionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.suppressionRecurrence">suppressionRecurrence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionType`<sup>Required</sup> <a name="conditionType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.conditionType"></a>

```java
public java.lang.String getConditionType();
```

- *Type:* java.lang.String

---

##### `suppressionDuration`<sup>Required</sup> <a name="suppressionDuration" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.suppressionDuration"></a>

```java
public java.lang.String getSuppressionDuration();
```

- *Type:* java.lang.String

---

##### `suppressionRecurrence`<sup>Required</sup> <a name="suppressionRecurrence" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.suppressionRecurrence"></a>

```java
public java.lang.String getSuppressionRecurrence();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.internalValue"></a>

```java
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions</a>

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.get"></a>

```java
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.items"></a>

```java
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.internalValue"></a>

```java
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection</a>

---


### DataOciMonitoringAlarmSuppressionsFilterList <a name="DataOciMonitoringAlarmSuppressionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressionsFilterList;

new DataOciMonitoringAlarmSuppressionsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.get"></a>

```java
public DataOciMonitoringAlarmSuppressionsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>>

---


### DataOciMonitoringAlarmSuppressionsFilterOutputReference <a name="DataOciMonitoringAlarmSuppressionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_monitoring_alarm_suppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference;

new DataOciMonitoringAlarmSuppressionsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>

---



