# `dataOciStackMonitoringDiscoveryJobLogs` Submodule <a name="`dataOciStackMonitoringDiscoveryJobLogs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringDiscoveryJobLogs <a name="DataOciStackMonitoringDiscoveryJobLogs" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs oci_stack_monitoring_discovery_job_logs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_discovery_job_logs.DataOciStackMonitoringDiscoveryJobLogs;

DataOciStackMonitoringDiscoveryJobLogs.Builder.create(Construct scope, java.lang.String id)
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
    .discoveryJobId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciStackMonitoringDiscoveryJobLogsFilter>)
//  .id(java.lang.String)
//  .logType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.discoveryJobId">discoveryJobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#discovery_job_id DataOciStackMonitoringDiscoveryJobLogs#discovery_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#id DataOciStackMonitoringDiscoveryJobLogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.logType">logType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#log_type DataOciStackMonitoringDiscoveryJobLogs#log_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.discoveryJobId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#discovery_job_id DataOciStackMonitoringDiscoveryJobLogs#discovery_job_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#filter DataOciStackMonitoringDiscoveryJobLogs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#id DataOciStackMonitoringDiscoveryJobLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logType`<sup>Optional</sup> <a name="logType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.logType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#log_type DataOciStackMonitoringDiscoveryJobLogs#log_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.resetLogType">resetLogType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciStackMonitoringDiscoveryJobLogsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.resetId"></a>

```java
public void resetId()
```

##### `resetLogType` <a name="resetLogType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.resetLogType"></a>

```java
public void resetLogType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringDiscoveryJobLogs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_discovery_job_logs.DataOciStackMonitoringDiscoveryJobLogs;

DataOciStackMonitoringDiscoveryJobLogs.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_discovery_job_logs.DataOciStackMonitoringDiscoveryJobLogs;

DataOciStackMonitoringDiscoveryJobLogs.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_discovery_job_logs.DataOciStackMonitoringDiscoveryJobLogs;

DataOciStackMonitoringDiscoveryJobLogs.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_discovery_job_logs.DataOciStackMonitoringDiscoveryJobLogs;

DataOciStackMonitoringDiscoveryJobLogs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciStackMonitoringDiscoveryJobLogs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciStackMonitoringDiscoveryJobLogs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciStackMonitoringDiscoveryJobLogs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciStackMonitoringDiscoveryJobLogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringDiscoveryJobLogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.discoveryJobLogCollection">discoveryJobLogCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList">DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList">DataOciStackMonitoringDiscoveryJobLogsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.discoveryJobIdInput">discoveryJobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.logTypeInput">logTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.discoveryJobId">discoveryJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.logType">logType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `discoveryJobLogCollection`<sup>Required</sup> <a name="discoveryJobLogCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.discoveryJobLogCollection"></a>

```java
public DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList getDiscoveryJobLogCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList">DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.filter"></a>

```java
public DataOciStackMonitoringDiscoveryJobLogsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList">DataOciStackMonitoringDiscoveryJobLogsFilterList</a>

---

##### `discoveryJobIdInput`<sup>Optional</sup> <a name="discoveryJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.discoveryJobIdInput"></a>

```java
public java.lang.String getDiscoveryJobIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.logTypeInput"></a>

```java
public java.lang.String getLogTypeInput();
```

- *Type:* java.lang.String

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.discoveryJobId"></a>

```java
public java.lang.String getDiscoveryJobId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logType`<sup>Required</sup> <a name="logType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringDiscoveryJobLogsConfig <a name="DataOciStackMonitoringDiscoveryJobLogsConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_discovery_job_logs.DataOciStackMonitoringDiscoveryJobLogsConfig;

DataOciStackMonitoringDiscoveryJobLogsConfig.builder()
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
    .discoveryJobId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciStackMonitoringDiscoveryJobLogsFilter>)
//  .id(java.lang.String)
//  .logType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.discoveryJobId">discoveryJobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#discovery_job_id DataOciStackMonitoringDiscoveryJobLogs#discovery_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#id DataOciStackMonitoringDiscoveryJobLogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.logType">logType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#log_type DataOciStackMonitoringDiscoveryJobLogs#log_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.discoveryJobId"></a>

```java
public java.lang.String getDiscoveryJobId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#discovery_job_id DataOciStackMonitoringDiscoveryJobLogs#discovery_job_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#filter DataOciStackMonitoringDiscoveryJobLogs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#id DataOciStackMonitoringDiscoveryJobLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logType`<sup>Optional</sup> <a name="logType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#log_type DataOciStackMonitoringDiscoveryJobLogs#log_type}.

---

### DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection <a name="DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_discovery_job_logs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection;

DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection.builder()
    .build();
```


### DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems <a name="DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_discovery_job_logs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems;

DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems.builder()
    .build();
```


### DataOciStackMonitoringDiscoveryJobLogsFilter <a name="DataOciStackMonitoringDiscoveryJobLogsFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_discovery_job_logs.DataOciStackMonitoringDiscoveryJobLogsFilter;

DataOciStackMonitoringDiscoveryJobLogsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#name DataOciStackMonitoringDiscoveryJobLogs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#values DataOciStackMonitoringDiscoveryJobLogs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#regex DataOciStackMonitoringDiscoveryJobLogs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#name DataOciStackMonitoringDiscoveryJobLogs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#values DataOciStackMonitoringDiscoveryJobLogs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#regex DataOciStackMonitoringDiscoveryJobLogs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList <a name="DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_discovery_job_logs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList;

new DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.get"></a>

```java
public DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference <a name="DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_discovery_job_logs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference;

new DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.logMessage">logMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.logType">logType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems">DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logMessage`<sup>Required</sup> <a name="logMessage" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.logMessage"></a>

```java
public java.lang.String getLogMessage();
```

- *Type:* java.lang.String

---

##### `logType`<sup>Required</sup> <a name="logType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems">DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems</a>

---


### DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList <a name="DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_discovery_job_logs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList;

new DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.get"></a>

```java
public DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference <a name="DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_discovery_job_logs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference;

new DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList">DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection">DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.property.items"></a>

```java
public DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList">DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection">DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection</a>

---


### DataOciStackMonitoringDiscoveryJobLogsFilterList <a name="DataOciStackMonitoringDiscoveryJobLogsFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_discovery_job_logs.DataOciStackMonitoringDiscoveryJobLogsFilterList;

new DataOciStackMonitoringDiscoveryJobLogsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.get"></a>

```java
public DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>>

---


### DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference <a name="DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_discovery_job_logs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference;

new DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>

---



