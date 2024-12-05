# `dataOciStackMonitoringMetricExtensions` Submodule <a name="`dataOciStackMonitoringMetricExtensions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMetricExtensions <a name="DataOciStackMonitoringMetricExtensions" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions oci_stack_monitoring_metric_extensions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensions;

DataOciStackMonitoringMetricExtensions.Builder.create(Construct scope, java.lang.String id)
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
//  .enabledOnResourceId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciStackMonitoringMetricExtensionsFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .resourceType(java.lang.String)
//  .state(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#compartment_id DataOciStackMonitoringMetricExtensions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.enabledOnResourceId">enabledOnResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#enabled_on_resource_id DataOciStackMonitoringMetricExtensions#enabled_on_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#id DataOciStackMonitoringMetricExtensions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#resource_type DataOciStackMonitoringMetricExtensions#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#state DataOciStackMonitoringMetricExtensions#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#status DataOciStackMonitoringMetricExtensions#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#compartment_id DataOciStackMonitoringMetricExtensions#compartment_id}.

---

##### `enabledOnResourceId`<sup>Optional</sup> <a name="enabledOnResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.enabledOnResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#enabled_on_resource_id DataOciStackMonitoringMetricExtensions#enabled_on_resource_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#filter DataOciStackMonitoringMetricExtensions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#id DataOciStackMonitoringMetricExtensions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.resourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#resource_type DataOciStackMonitoringMetricExtensions#resource_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#state DataOciStackMonitoringMetricExtensions#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#status DataOciStackMonitoringMetricExtensions#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetEnabledOnResourceId">resetEnabledOnResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciStackMonitoringMetricExtensionsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>>

---

##### `resetEnabledOnResourceId` <a name="resetEnabledOnResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetEnabledOnResourceId"></a>

```java
public void resetEnabledOnResourceId()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetName"></a>

```java
public void resetName()
```

##### `resetResourceType` <a name="resetResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetResourceType"></a>

```java
public void resetResourceType()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetState"></a>

```java
public void resetState()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMetricExtensions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensions;

DataOciStackMonitoringMetricExtensions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensions;

DataOciStackMonitoringMetricExtensions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensions;

DataOciStackMonitoringMetricExtensions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensions;

DataOciStackMonitoringMetricExtensions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciStackMonitoringMetricExtensions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciStackMonitoringMetricExtensions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciStackMonitoringMetricExtensions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciStackMonitoringMetricExtensions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMetricExtensions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList">DataOciStackMonitoringMetricExtensionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.metricExtensionCollection">metricExtensionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.enabledOnResourceIdInput">enabledOnResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.enabledOnResourceId">enabledOnResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.filter"></a>

```java
public DataOciStackMonitoringMetricExtensionsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList">DataOciStackMonitoringMetricExtensionsFilterList</a>

---

##### `metricExtensionCollection`<sup>Required</sup> <a name="metricExtensionCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.metricExtensionCollection"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList getMetricExtensionCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `enabledOnResourceIdInput`<sup>Optional</sup> <a name="enabledOnResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.enabledOnResourceIdInput"></a>

```java
public java.lang.String getEnabledOnResourceIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `enabledOnResourceId`<sup>Required</sup> <a name="enabledOnResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.enabledOnResourceId"></a>

```java
public java.lang.String getEnabledOnResourceId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMetricExtensionsConfig <a name="DataOciStackMonitoringMetricExtensionsConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsConfig;

DataOciStackMonitoringMetricExtensionsConfig.builder()
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
//  .enabledOnResourceId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciStackMonitoringMetricExtensionsFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .resourceType(java.lang.String)
//  .state(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#compartment_id DataOciStackMonitoringMetricExtensions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.enabledOnResourceId">enabledOnResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#enabled_on_resource_id DataOciStackMonitoringMetricExtensions#enabled_on_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#id DataOciStackMonitoringMetricExtensions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#resource_type DataOciStackMonitoringMetricExtensions#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#state DataOciStackMonitoringMetricExtensions#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#status DataOciStackMonitoringMetricExtensions#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#compartment_id DataOciStackMonitoringMetricExtensions#compartment_id}.

---

##### `enabledOnResourceId`<sup>Optional</sup> <a name="enabledOnResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.enabledOnResourceId"></a>

```java
public java.lang.String getEnabledOnResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#enabled_on_resource_id DataOciStackMonitoringMetricExtensions#enabled_on_resource_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#filter DataOciStackMonitoringMetricExtensions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#id DataOciStackMonitoringMetricExtensions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#resource_type DataOciStackMonitoringMetricExtensions#resource_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#state DataOciStackMonitoringMetricExtensions#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#status DataOciStackMonitoringMetricExtensions#status}.

---

### DataOciStackMonitoringMetricExtensionsFilter <a name="DataOciStackMonitoringMetricExtensionsFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsFilter;

DataOciStackMonitoringMetricExtensionsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#values DataOciStackMonitoringMetricExtensions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#regex DataOciStackMonitoringMetricExtensions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#values DataOciStackMonitoringMetricExtensions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#regex DataOciStackMonitoringMetricExtensions#regex}.

---

### DataOciStackMonitoringMetricExtensionsMetricExtensionCollection <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection;

DataOciStackMonitoringMetricExtensionsMetricExtensionCollection.builder()
    .build();
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems;

DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems.builder()
    .build();
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources;

DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources.builder()
    .build();
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct;

DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct.builder()
    .build();
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties;

DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties.builder()
    .build();
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails;

DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails.builder()
    .build();
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails;

DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails.builder()
    .build();
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails;

DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails.builder()
    .build();
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails;

DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMetricExtensionsFilterList <a name="DataOciStackMonitoringMetricExtensionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsFilterList;

new DataOciStackMonitoringMetricExtensionsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.get"></a>

```java
public DataOciStackMonitoringMetricExtensionsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>>

---


### DataOciStackMonitoringMetricExtensionsFilterOutputReference <a name="DataOciStackMonitoringMetricExtensionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference;

new DataOciStackMonitoringMetricExtensionsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.get"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.get"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.get"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.computeExpression">computeExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.isDimension">isDimension</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.isHidden">isHidden</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.metricCategory">metricCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeExpression`<sup>Required</sup> <a name="computeExpression" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.computeExpression"></a>

```java
public java.lang.String getComputeExpression();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `isDimension`<sup>Required</sup> <a name="isDimension" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.isDimension"></a>

```java
public IResolvable getIsDimension();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isHidden`<sup>Required</sup> <a name="isHidden" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.isHidden"></a>

```java
public IResolvable getIsHidden();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `metricCategory`<sup>Required</sup> <a name="metricCategory" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.metricCategory"></a>

```java
public java.lang.String getMetricCategory();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.collectionMethod">collectionMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.collectionRecurrences">collectionRecurrences</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.enabledOnResources">enabledOnResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.enabledOnResourcesCount">enabledOnResourcesCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.metricList">metricList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.publishTrigger">publishTrigger</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.queryProperties">queryProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.resourceUri">resourceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `collectionMethod`<sup>Required</sup> <a name="collectionMethod" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.collectionMethod"></a>

```java
public java.lang.String getCollectionMethod();
```

- *Type:* java.lang.String

---

##### `collectionRecurrences`<sup>Required</sup> <a name="collectionRecurrences" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.collectionRecurrences"></a>

```java
public java.lang.String getCollectionRecurrences();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabledOnResources`<sup>Required</sup> <a name="enabledOnResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.enabledOnResources"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList getEnabledOnResources();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList</a>

---

##### `enabledOnResourcesCount`<sup>Required</sup> <a name="enabledOnResourcesCount" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.enabledOnResourcesCount"></a>

```java
public java.lang.Number getEnabledOnResourcesCount();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.lastUpdatedBy"></a>

```java
public java.lang.String getLastUpdatedBy();
```

- *Type:* java.lang.String

---

##### `metricList`<sup>Required</sup> <a name="metricList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.metricList"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList getMetricList();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publishTrigger`<sup>Required</sup> <a name="publishTrigger" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.publishTrigger"></a>

```java
public IResolvable getPublishTrigger();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `queryProperties`<sup>Required</sup> <a name="queryProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.queryProperties"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList getQueryProperties();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList</a>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.resourceUri"></a>

```java
public java.lang.String getResourceUri();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.get"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.inParamPosition">inParamPosition</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.inParamValue">inParamValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inParamPosition`<sup>Required</sup> <a name="inParamPosition" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.inParamPosition"></a>

```java
public java.lang.Number getInParamPosition();
```

- *Type:* java.lang.Number

---

##### `inParamValue`<sup>Required</sup> <a name="inParamValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.inParamValue"></a>

```java
public java.lang.String getInParamValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.get"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.get"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition">outParamPosition</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.outParamType">outParamType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outParamPosition`<sup>Required</sup> <a name="outParamPosition" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition"></a>

```java
public java.lang.Number getOutParamPosition();
```

- *Type:* java.lang.Number

---

##### `outParamType`<sup>Required</sup> <a name="outParamType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.outParamType"></a>

```java
public java.lang.String getOutParamType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.arguments">arguments</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.autoRowPrefix">autoRowPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.collectionMethod">collectionMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.command">command</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.identityMetric">identityMetric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.inParamDetails">inParamDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.isMetricServiceEnabled">isMetricServiceEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.jmxAttributes">jmxAttributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.managedBeanQuery">managedBeanQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.outParamDetails">outParamDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.scriptDetails">scriptDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.sqlDetails">sqlDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.sqlType">sqlType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.startsWith">startsWith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.arguments"></a>

```java
public java.lang.String getArguments();
```

- *Type:* java.lang.String

---

##### `autoRowPrefix`<sup>Required</sup> <a name="autoRowPrefix" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.autoRowPrefix"></a>

```java
public java.lang.String getAutoRowPrefix();
```

- *Type:* java.lang.String

---

##### `collectionMethod`<sup>Required</sup> <a name="collectionMethod" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.collectionMethod"></a>

```java
public java.lang.String getCollectionMethod();
```

- *Type:* java.lang.String

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.command"></a>

```java
public java.lang.String getCommand();
```

- *Type:* java.lang.String

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

---

##### `identityMetric`<sup>Required</sup> <a name="identityMetric" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.identityMetric"></a>

```java
public java.lang.String getIdentityMetric();
```

- *Type:* java.lang.String

---

##### `inParamDetails`<sup>Required</sup> <a name="inParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.inParamDetails"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList getInParamDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList</a>

---

##### `isMetricServiceEnabled`<sup>Required</sup> <a name="isMetricServiceEnabled" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.isMetricServiceEnabled"></a>

```java
public IResolvable getIsMetricServiceEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `jmxAttributes`<sup>Required</sup> <a name="jmxAttributes" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.jmxAttributes"></a>

```java
public java.lang.String getJmxAttributes();
```

- *Type:* java.lang.String

---

##### `managedBeanQuery`<sup>Required</sup> <a name="managedBeanQuery" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.managedBeanQuery"></a>

```java
public java.lang.String getManagedBeanQuery();
```

- *Type:* java.lang.String

---

##### `outParamDetails`<sup>Required</sup> <a name="outParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.outParamDetails"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList getOutParamDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList</a>

---

##### `scriptDetails`<sup>Required</sup> <a name="scriptDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.scriptDetails"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList getScriptDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList</a>

---

##### `sqlDetails`<sup>Required</sup> <a name="sqlDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.sqlDetails"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList getSqlDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList</a>

---

##### `sqlType`<sup>Required</sup> <a name="sqlType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.sqlType"></a>

```java
public java.lang.String getSqlType();
```

- *Type:* java.lang.String

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.startsWith"></a>

```java
public java.lang.String getStartsWith();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.get"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.get"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.scriptFileName">scriptFileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `scriptFileName`<sup>Required</sup> <a name="scriptFileName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.scriptFileName"></a>

```java
public java.lang.String getScriptFileName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.get"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_metric_extensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference;

new DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection">DataOciStackMonitoringMetricExtensionsMetricExtensionCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.items"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMetricExtensionsMetricExtensionCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection">DataOciStackMonitoringMetricExtensionsMetricExtensionCollection</a>

---



