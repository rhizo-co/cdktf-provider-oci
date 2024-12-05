# `dataOciResourceSchedulerSchedules` Submodule <a name="`dataOciResourceSchedulerSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciResourceSchedulerSchedules <a name="DataOciResourceSchedulerSchedules" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules oci_resource_scheduler_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedules;

DataOciResourceSchedulerSchedules.Builder.create(Construct scope, java.lang.String id)
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
//  .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciResourceSchedulerSchedulesFilter>)
//  .id(java.lang.String)
//  .scheduleId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#compartment_id DataOciResourceSchedulerSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#display_name DataOciResourceSchedulerSchedules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#id DataOciResourceSchedulerSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.scheduleId">scheduleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#schedule_id DataOciResourceSchedulerSchedules#schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#state DataOciResourceSchedulerSchedules#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#compartment_id DataOciResourceSchedulerSchedules#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#display_name DataOciResourceSchedulerSchedules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#filter DataOciResourceSchedulerSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#id DataOciResourceSchedulerSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scheduleId`<sup>Optional</sup> <a name="scheduleId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.scheduleId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#schedule_id DataOciResourceSchedulerSchedules#schedule_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#state DataOciResourceSchedulerSchedules#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetScheduleId">resetScheduleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciResourceSchedulerSchedulesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetId"></a>

```java
public void resetId()
```

##### `resetScheduleId` <a name="resetScheduleId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetScheduleId"></a>

```java
public void resetScheduleId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciResourceSchedulerSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedules;

DataOciResourceSchedulerSchedules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedules;

DataOciResourceSchedulerSchedules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedules;

DataOciResourceSchedulerSchedules.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedules;

DataOciResourceSchedulerSchedules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciResourceSchedulerSchedules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciResourceSchedulerSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciResourceSchedulerSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciResourceSchedulerSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciResourceSchedulerSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList">DataOciResourceSchedulerSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleCollection">scheduleCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList">DataOciResourceSchedulerSchedulesScheduleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleIdInput">scheduleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleId">scheduleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.filter"></a>

```java
public DataOciResourceSchedulerSchedulesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList">DataOciResourceSchedulerSchedulesFilterList</a>

---

##### `scheduleCollection`<sup>Required</sup> <a name="scheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleCollection"></a>

```java
public DataOciResourceSchedulerSchedulesScheduleCollectionList getScheduleCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList">DataOciResourceSchedulerSchedulesScheduleCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `scheduleIdInput`<sup>Optional</sup> <a name="scheduleIdInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleIdInput"></a>

```java
public java.lang.String getScheduleIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `scheduleId`<sup>Required</sup> <a name="scheduleId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleId"></a>

```java
public java.lang.String getScheduleId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciResourceSchedulerSchedulesConfig <a name="DataOciResourceSchedulerSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesConfig;

DataOciResourceSchedulerSchedulesConfig.builder()
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
//  .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciResourceSchedulerSchedulesFilter>)
//  .id(java.lang.String)
//  .scheduleId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#compartment_id DataOciResourceSchedulerSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#display_name DataOciResourceSchedulerSchedules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#id DataOciResourceSchedulerSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.scheduleId">scheduleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#schedule_id DataOciResourceSchedulerSchedules#schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#state DataOciResourceSchedulerSchedules#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#compartment_id DataOciResourceSchedulerSchedules#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#display_name DataOciResourceSchedulerSchedules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#filter DataOciResourceSchedulerSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#id DataOciResourceSchedulerSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scheduleId`<sup>Optional</sup> <a name="scheduleId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.scheduleId"></a>

```java
public java.lang.String getScheduleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#schedule_id DataOciResourceSchedulerSchedules#schedule_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#state DataOciResourceSchedulerSchedules#state}.

---

### DataOciResourceSchedulerSchedulesFilter <a name="DataOciResourceSchedulerSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesFilter;

DataOciResourceSchedulerSchedulesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#name DataOciResourceSchedulerSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#values DataOciResourceSchedulerSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#regex DataOciResourceSchedulerSchedules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#name DataOciResourceSchedulerSchedules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#values DataOciResourceSchedulerSchedules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#regex DataOciResourceSchedulerSchedules#regex}.

---

### DataOciResourceSchedulerSchedulesScheduleCollection <a name="DataOciResourceSchedulerSchedulesScheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesScheduleCollection;

DataOciResourceSchedulerSchedulesScheduleCollection.builder()
    .build();
```


### DataOciResourceSchedulerSchedulesScheduleCollectionItems <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems;

DataOciResourceSchedulerSchedulesScheduleCollectionItems.builder()
    .build();
```


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters;

DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters.builder()
    .build();
```


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue;

DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue.builder()
    .build();
```


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources;

DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciResourceSchedulerSchedulesFilterList <a name="DataOciResourceSchedulerSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesFilterList;

new DataOciResourceSchedulerSchedulesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.get"></a>

```java
public DataOciResourceSchedulerSchedulesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>>

---


### DataOciResourceSchedulerSchedulesFilterOutputReference <a name="DataOciResourceSchedulerSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesFilterOutputReference;

new DataOciResourceSchedulerSchedulesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.get"></a>

```java
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.recurrenceDetails">recurrenceDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.recurrenceType">recurrenceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.resourceFilters">resourceFilters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.resources">resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeEnds">timeEnds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeLastRun">timeLastRun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeNextRun">timeNextRun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeStarts">timeStarts</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems">DataOciResourceSchedulerSchedulesScheduleCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `recurrenceDetails`<sup>Required</sup> <a name="recurrenceDetails" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.recurrenceDetails"></a>

```java
public java.lang.String getRecurrenceDetails();
```

- *Type:* java.lang.String

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.recurrenceType"></a>

```java
public java.lang.String getRecurrenceType();
```

- *Type:* java.lang.String

---

##### `resourceFilters`<sup>Required</sup> <a name="resourceFilters" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.resourceFilters"></a>

```java
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList getResourceFilters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.resources"></a>

```java
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList getResources();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeEnds`<sup>Required</sup> <a name="timeEnds" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeEnds"></a>

```java
public java.lang.String getTimeEnds();
```

- *Type:* java.lang.String

---

##### `timeLastRun`<sup>Required</sup> <a name="timeLastRun" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeLastRun"></a>

```java
public java.lang.String getTimeLastRun();
```

- *Type:* java.lang.String

---

##### `timeNextRun`<sup>Required</sup> <a name="timeNextRun" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeNextRun"></a>

```java
public java.lang.String getTimeNextRun();
```

- *Type:* java.lang.String

---

##### `timeStarts`<sup>Required</sup> <a name="timeStarts" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeStarts"></a>

```java
public java.lang.String getTimeStarts();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciResourceSchedulerSchedulesScheduleCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems">DataOciResourceSchedulerSchedulesScheduleCollectionItems</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.get"></a>

```java
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.shouldIncludeChildCompartments">shouldIncludeChildCompartments</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.value">value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `shouldIncludeChildCompartments`<sup>Required</sup> <a name="shouldIncludeChildCompartments" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.shouldIncludeChildCompartments"></a>

```java
public IResolvable getShouldIncludeChildCompartments();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.value"></a>

```java
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList getValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.internalValue"></a>

```java
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.get"></a>

```java
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.internalValue"></a>

```java
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.get"></a>

```java
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.internalValue"></a>

```java
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesScheduleCollectionList;

new DataOciResourceSchedulerSchedulesScheduleCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.get"></a>

```java
public DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_resource_scheduler_schedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference;

new DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection">DataOciResourceSchedulerSchedulesScheduleCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.items"></a>

```java
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.internalValue"></a>

```java
public DataOciResourceSchedulerSchedulesScheduleCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection">DataOciResourceSchedulerSchedulesScheduleCollection</a>

---



