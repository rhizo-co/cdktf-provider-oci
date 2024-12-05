# `dataOciStackMonitoringMonitoredResourceTypes` Submodule <a name="`dataOciStackMonitoringMonitoredResourceTypes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMonitoredResourceTypes <a name="DataOciStackMonitoringMonitoredResourceTypes" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types oci_stack_monitoring_monitored_resource_types}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypes;

DataOciStackMonitoringMonitoredResourceTypes.Builder.create(Construct scope, java.lang.String id)
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
//  .excludeFields(java.util.List<java.lang.String>)
//  .fields(java.util.List<java.lang.String>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciStackMonitoringMonitoredResourceTypesFilter>)
//  .id(java.lang.String)
//  .isExcludeSystemTypes(java.lang.Boolean)
//  .isExcludeSystemTypes(IResolvable)
//  .metricNamespace(java.lang.String)
//  .name(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#compartment_id DataOciStackMonitoringMonitoredResourceTypes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.excludeFields">excludeFields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#exclude_fields DataOciStackMonitoringMonitoredResourceTypes#exclude_fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#fields DataOciStackMonitoringMonitoredResourceTypes#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#id DataOciStackMonitoringMonitoredResourceTypes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.isExcludeSystemTypes">isExcludeSystemTypes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#is_exclude_system_types DataOciStackMonitoringMonitoredResourceTypes#is_exclude_system_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.metricNamespace">metricNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#metric_namespace DataOciStackMonitoringMonitoredResourceTypes#metric_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#name DataOciStackMonitoringMonitoredResourceTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#status DataOciStackMonitoringMonitoredResourceTypes#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#compartment_id DataOciStackMonitoringMonitoredResourceTypes#compartment_id}.

---

##### `excludeFields`<sup>Optional</sup> <a name="excludeFields" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.excludeFields"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#exclude_fields DataOciStackMonitoringMonitoredResourceTypes#exclude_fields}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.fields"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#fields DataOciStackMonitoringMonitoredResourceTypes#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#filter DataOciStackMonitoringMonitoredResourceTypes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#id DataOciStackMonitoringMonitoredResourceTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isExcludeSystemTypes`<sup>Optional</sup> <a name="isExcludeSystemTypes" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.isExcludeSystemTypes"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#is_exclude_system_types DataOciStackMonitoringMonitoredResourceTypes#is_exclude_system_types}.

---

##### `metricNamespace`<sup>Optional</sup> <a name="metricNamespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.metricNamespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#metric_namespace DataOciStackMonitoringMonitoredResourceTypes#metric_namespace}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#name DataOciStackMonitoringMonitoredResourceTypes#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#status DataOciStackMonitoringMonitoredResourceTypes#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetExcludeFields">resetExcludeFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetIsExcludeSystemTypes">resetIsExcludeSystemTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetMetricNamespace">resetMetricNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciStackMonitoringMonitoredResourceTypesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>>

---

##### `resetExcludeFields` <a name="resetExcludeFields" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetExcludeFields"></a>

```java
public void resetExcludeFields()
```

##### `resetFields` <a name="resetFields" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetFields"></a>

```java
public void resetFields()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetId"></a>

```java
public void resetId()
```

##### `resetIsExcludeSystemTypes` <a name="resetIsExcludeSystemTypes" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetIsExcludeSystemTypes"></a>

```java
public void resetIsExcludeSystemTypes()
```

##### `resetMetricNamespace` <a name="resetMetricNamespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetMetricNamespace"></a>

```java
public void resetMetricNamespace()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetName"></a>

```java
public void resetName()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResourceTypes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypes;

DataOciStackMonitoringMonitoredResourceTypes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypes;

DataOciStackMonitoringMonitoredResourceTypes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypes;

DataOciStackMonitoringMonitoredResourceTypes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypes;

DataOciStackMonitoringMonitoredResourceTypes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciStackMonitoringMonitoredResourceTypes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResourceTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciStackMonitoringMonitoredResourceTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciStackMonitoringMonitoredResourceTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMonitoredResourceTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList">DataOciStackMonitoringMonitoredResourceTypesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.monitoredResourceTypesCollection">monitoredResourceTypesCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.excludeFieldsInput">excludeFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.fieldsInput">fieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.isExcludeSystemTypesInput">isExcludeSystemTypesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.metricNamespaceInput">metricNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.excludeFields">excludeFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.isExcludeSystemTypes">isExcludeSystemTypes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.metricNamespace">metricNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.filter"></a>

```java
public DataOciStackMonitoringMonitoredResourceTypesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList">DataOciStackMonitoringMonitoredResourceTypesFilterList</a>

---

##### `monitoredResourceTypesCollection`<sup>Required</sup> <a name="monitoredResourceTypesCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.monitoredResourceTypesCollection"></a>

```java
public DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList getMonitoredResourceTypesCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `excludeFieldsInput`<sup>Optional</sup> <a name="excludeFieldsInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.excludeFieldsInput"></a>

```java
public java.util.List<java.lang.String> getExcludeFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.fieldsInput"></a>

```java
public java.util.List<java.lang.String> getFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isExcludeSystemTypesInput`<sup>Optional</sup> <a name="isExcludeSystemTypesInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.isExcludeSystemTypesInput"></a>

```java
public java.lang.Object getIsExcludeSystemTypesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metricNamespaceInput`<sup>Optional</sup> <a name="metricNamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.metricNamespaceInput"></a>

```java
public java.lang.String getMetricNamespaceInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `excludeFields`<sup>Required</sup> <a name="excludeFields" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.excludeFields"></a>

```java
public java.util.List<java.lang.String> getExcludeFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.fields"></a>

```java
public java.util.List<java.lang.String> getFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isExcludeSystemTypes`<sup>Required</sup> <a name="isExcludeSystemTypes" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.isExcludeSystemTypes"></a>

```java
public java.lang.Object getIsExcludeSystemTypes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.metricNamespace"></a>

```java
public java.lang.String getMetricNamespace();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMonitoredResourceTypesConfig <a name="DataOciStackMonitoringMonitoredResourceTypesConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypesConfig;

DataOciStackMonitoringMonitoredResourceTypesConfig.builder()
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
//  .excludeFields(java.util.List<java.lang.String>)
//  .fields(java.util.List<java.lang.String>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciStackMonitoringMonitoredResourceTypesFilter>)
//  .id(java.lang.String)
//  .isExcludeSystemTypes(java.lang.Boolean)
//  .isExcludeSystemTypes(IResolvable)
//  .metricNamespace(java.lang.String)
//  .name(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#compartment_id DataOciStackMonitoringMonitoredResourceTypes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.excludeFields">excludeFields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#exclude_fields DataOciStackMonitoringMonitoredResourceTypes#exclude_fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#fields DataOciStackMonitoringMonitoredResourceTypes#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#id DataOciStackMonitoringMonitoredResourceTypes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.isExcludeSystemTypes">isExcludeSystemTypes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#is_exclude_system_types DataOciStackMonitoringMonitoredResourceTypes#is_exclude_system_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.metricNamespace">metricNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#metric_namespace DataOciStackMonitoringMonitoredResourceTypes#metric_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#name DataOciStackMonitoringMonitoredResourceTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#status DataOciStackMonitoringMonitoredResourceTypes#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#compartment_id DataOciStackMonitoringMonitoredResourceTypes#compartment_id}.

---

##### `excludeFields`<sup>Optional</sup> <a name="excludeFields" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.excludeFields"></a>

```java
public java.util.List<java.lang.String> getExcludeFields();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#exclude_fields DataOciStackMonitoringMonitoredResourceTypes#exclude_fields}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.fields"></a>

```java
public java.util.List<java.lang.String> getFields();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#fields DataOciStackMonitoringMonitoredResourceTypes#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#filter DataOciStackMonitoringMonitoredResourceTypes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#id DataOciStackMonitoringMonitoredResourceTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isExcludeSystemTypes`<sup>Optional</sup> <a name="isExcludeSystemTypes" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.isExcludeSystemTypes"></a>

```java
public java.lang.Object getIsExcludeSystemTypes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#is_exclude_system_types DataOciStackMonitoringMonitoredResourceTypes#is_exclude_system_types}.

---

##### `metricNamespace`<sup>Optional</sup> <a name="metricNamespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.metricNamespace"></a>

```java
public java.lang.String getMetricNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#metric_namespace DataOciStackMonitoringMonitoredResourceTypes#metric_namespace}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#name DataOciStackMonitoringMonitoredResourceTypes#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#status DataOciStackMonitoringMonitoredResourceTypes#status}.

---

### DataOciStackMonitoringMonitoredResourceTypesFilter <a name="DataOciStackMonitoringMonitoredResourceTypesFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypesFilter;

DataOciStackMonitoringMonitoredResourceTypesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#name DataOciStackMonitoringMonitoredResourceTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#values DataOciStackMonitoringMonitoredResourceTypes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#regex DataOciStackMonitoringMonitoredResourceTypes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#name DataOciStackMonitoringMonitoredResourceTypes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#values DataOciStackMonitoringMonitoredResourceTypes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#regex DataOciStackMonitoringMonitoredResourceTypes#regex}.

---

### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection;

DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection.builder()
    .build();
```


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems;

DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems.builder()
    .build();
```


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata;

DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata.builder()
    .build();
```


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets;

DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMonitoredResourceTypesFilterList <a name="DataOciStackMonitoringMonitoredResourceTypesFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypesFilterList;

new DataOciStackMonitoringMonitoredResourceTypesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>>

---


### DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference <a name="DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference;

new DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>

---


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList;

new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList;

new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference;

new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.agentProperties">agentProperties</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.requiredProperties">requiredProperties</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.uniquePropertySets">uniquePropertySets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.validPropertiesForCreate">validPropertiesForCreate</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.validPropertiesForUpdate">validPropertiesForUpdate</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.validPropertyValues">validPropertyValues</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentProperties`<sup>Required</sup> <a name="agentProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.agentProperties"></a>

```java
public java.util.List<java.lang.String> getAgentProperties();
```

- *Type:* java.util.List<java.lang.String>

---

##### `format`<sup>Required</sup> <a name="format" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `requiredProperties`<sup>Required</sup> <a name="requiredProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.requiredProperties"></a>

```java
public java.util.List<java.lang.String> getRequiredProperties();
```

- *Type:* java.util.List<java.lang.String>

---

##### `uniquePropertySets`<sup>Required</sup> <a name="uniquePropertySets" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.uniquePropertySets"></a>

```java
public DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList getUniquePropertySets();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList</a>

---

##### `validPropertiesForCreate`<sup>Required</sup> <a name="validPropertiesForCreate" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.validPropertiesForCreate"></a>

```java
public java.util.List<java.lang.String> getValidPropertiesForCreate();
```

- *Type:* java.util.List<java.lang.String>

---

##### `validPropertiesForUpdate`<sup>Required</sup> <a name="validPropertiesForUpdate" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.validPropertiesForUpdate"></a>

```java
public java.util.List<java.lang.String> getValidPropertiesForUpdate();
```

- *Type:* java.util.List<java.lang.String>

---

##### `validPropertyValues`<sup>Required</sup> <a name="validPropertyValues" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.validPropertyValues"></a>

```java
public StringMap getValidPropertyValues();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata</a>

---


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList;

new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference;

new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.property.properties">properties</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.property.properties"></a>

```java
public java.util.List<java.lang.String> getProperties();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets</a>

---


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference;

new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.metricNamespace">metricNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.resourceCategory">resourceCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.metadata"></a>

```java
public DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList getMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList</a>

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.metricNamespace"></a>

```java
public java.lang.String getMetricNamespace();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceCategory`<sup>Required</sup> <a name="resourceCategory" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.resourceCategory"></a>

```java
public java.lang.String getResourceCategory();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems</a>

---


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList;

new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.get"></a>

```java
public DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_monitored_resource_types.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference;

new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.property.items"></a>

```java
public DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection</a>

---



