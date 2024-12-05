# `dataOciStackMonitoringMonitoredResources` Submodule <a name="`dataOciStackMonitoringMonitoredResources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMonitoredResources <a name="DataOciStackMonitoringMonitoredResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources oci_stack_monitoring_monitored_resources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResources;

DataOciStackMonitoringMonitoredResources.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciStackMonitoringMonitoredResourcesFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .status(java.lang.String)
//  .workRequestId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#compartment_id DataOciStackMonitoringMonitoredResources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#id DataOciStackMonitoringMonitoredResources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#name DataOciStackMonitoringMonitoredResources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#status DataOciStackMonitoringMonitoredResources#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.workRequestId">workRequestId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#work_request_id DataOciStackMonitoringMonitoredResources#work_request_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#compartment_id DataOciStackMonitoringMonitoredResources#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#filter DataOciStackMonitoringMonitoredResources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#id DataOciStackMonitoringMonitoredResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#name DataOciStackMonitoringMonitoredResources#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#status DataOciStackMonitoringMonitoredResources#status}.

---

##### `workRequestId`<sup>Optional</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.workRequestId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#work_request_id DataOciStackMonitoringMonitoredResources#work_request_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetWorkRequestId">resetWorkRequestId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciStackMonitoringMonitoredResourcesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetName"></a>

```java
public void resetName()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetWorkRequestId` <a name="resetWorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetWorkRequestId"></a>

```java
public void resetWorkRequestId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResources;

DataOciStackMonitoringMonitoredResources.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResources;

DataOciStackMonitoringMonitoredResources.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResources;

DataOciStackMonitoringMonitoredResources.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResources;

DataOciStackMonitoringMonitoredResources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciStackMonitoringMonitoredResources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciStackMonitoringMonitoredResources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciStackMonitoringMonitoredResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMonitoredResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList">DataOciStackMonitoringMonitoredResourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.monitoredResourceCollection">monitoredResourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.workRequestIdInput">workRequestIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.workRequestId">workRequestId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.filter"></a>

```java
public DataOciStackMonitoringMonitoredResourcesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList">DataOciStackMonitoringMonitoredResourcesFilterList</a>

---

##### `monitoredResourceCollection`<sup>Required</sup> <a name="monitoredResourceCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.monitoredResourceCollection"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList getMonitoredResourceCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `workRequestIdInput`<sup>Optional</sup> <a name="workRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.workRequestIdInput"></a>

```java
public java.lang.String getWorkRequestIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.workRequestId"></a>

```java
public java.lang.String getWorkRequestId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMonitoredResourcesConfig <a name="DataOciStackMonitoringMonitoredResourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesConfig;

DataOciStackMonitoringMonitoredResourcesConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciStackMonitoringMonitoredResourcesFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .status(java.lang.String)
//  .workRequestId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#compartment_id DataOciStackMonitoringMonitoredResources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#id DataOciStackMonitoringMonitoredResources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#name DataOciStackMonitoringMonitoredResources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#status DataOciStackMonitoringMonitoredResources#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.workRequestId">workRequestId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#work_request_id DataOciStackMonitoringMonitoredResources#work_request_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#compartment_id DataOciStackMonitoringMonitoredResources#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#filter DataOciStackMonitoringMonitoredResources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#id DataOciStackMonitoringMonitoredResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#name DataOciStackMonitoringMonitoredResources#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#status DataOciStackMonitoringMonitoredResources#status}.

---

##### `workRequestId`<sup>Optional</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.workRequestId"></a>

```java
public java.lang.String getWorkRequestId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#work_request_id DataOciStackMonitoringMonitoredResources#work_request_id}.

---

### DataOciStackMonitoringMonitoredResourcesFilter <a name="DataOciStackMonitoringMonitoredResourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesFilter;

DataOciStackMonitoringMonitoredResourcesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#name DataOciStackMonitoringMonitoredResources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#values DataOciStackMonitoringMonitoredResources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#regex DataOciStackMonitoringMonitoredResources#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#name DataOciStackMonitoringMonitoredResources#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#values DataOciStackMonitoringMonitoredResources#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#regex DataOciStackMonitoringMonitoredResources#regex}.

---

### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection;

DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection.builder()
    .build();
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems;

DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems.builder()
    .build();
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases;

DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases.builder()
    .build();
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential;

DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential.builder()
    .build();
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials;

DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials.builder()
    .build();
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties;

DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties.builder()
    .build();
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases;

DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases.builder()
    .build();
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential;

DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential.builder()
    .build();
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials;

DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials.builder()
    .build();
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties;

DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties.builder()
    .build();
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails;

DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails.builder()
    .build();
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties;

DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMonitoredResourcesFilterList <a name="DataOciStackMonitoringMonitoredResourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesFilterList;

new DataOciStackMonitoringMonitoredResourcesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourcesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>>

---


### DataOciStackMonitoringMonitoredResourcesFilterOutputReference <a name="DataOciStackMonitoringMonitoredResourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference;

new DataOciStackMonitoringMonitoredResourcesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.credential">credential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credential`<sup>Required</sup> <a name="credential" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.credential"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList getCredential();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.properties"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList getProperties();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.credential">credential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credential`<sup>Required</sup> <a name="credential" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.credential"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList getCredential();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.properties"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList getProperties();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.connectorId">connectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.dbId">dbId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.dbUniqueName">dbUniqueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.sslSecretId">sslSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.connectorId"></a>

```java
public java.lang.String getConnectorId();
```

- *Type:* java.lang.String

---

##### `dbId`<sup>Required</sup> <a name="dbId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.dbId"></a>

```java
public java.lang.String getDbId();
```

- *Type:* java.lang.String

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.dbUniqueName"></a>

```java
public java.lang.String getDbUniqueName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `sslSecretId`<sup>Required</sup> <a name="sslSecretId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.sslSecretId"></a>

```java
public java.lang.String getSslSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.additionalAliases">additionalAliases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.additionalCredentials">additionalCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.aliases">aliases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.databaseConnectionDetails">databaseConnectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.externalResourceId">externalResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.license">license</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.resourceCategory">resourceCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.resourceTimeZone">resourceTimeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalAliases`<sup>Required</sup> <a name="additionalAliases" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.additionalAliases"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList getAdditionalAliases();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList</a>

---

##### `additionalCredentials`<sup>Required</sup> <a name="additionalCredentials" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.additionalCredentials"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList getAdditionalCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList</a>

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.aliases"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList getAliases();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.credentials"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList getCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList</a>

---

##### `databaseConnectionDetails`<sup>Required</sup> <a name="databaseConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.databaseConnectionDetails"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList getDatabaseConnectionDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `externalResourceId`<sup>Required</sup> <a name="externalResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.externalResourceId"></a>

```java
public java.lang.String getExternalResourceId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `license`<sup>Required</sup> <a name="license" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.license"></a>

```java
public java.lang.String getLicense();
```

- *Type:* java.lang.String

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.managementAgentId"></a>

```java
public java.lang.String getManagementAgentId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.properties"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList getProperties();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList</a>

---

##### `resourceCategory`<sup>Required</sup> <a name="resourceCategory" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.resourceCategory"></a>

```java
public java.lang.String getResourceCategory();
```

- *Type:* java.lang.String

---

##### `resourceTimeZone`<sup>Required</sup> <a name="resourceTimeZone" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.resourceTimeZone"></a>

```java
public java.lang.String getResourceTimeZone();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.items"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection</a>

---



