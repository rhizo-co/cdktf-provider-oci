# `dataOciStackMonitoringBaselineableMetricsEvaluate` Submodule <a name="`dataOciStackMonitoringBaselineableMetricsEvaluate` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringBaselineableMetricsEvaluate <a name="DataOciStackMonitoringBaselineableMetricsEvaluate" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate oci_stack_monitoring_baselineable_metrics_evaluate}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluate;

DataOciStackMonitoringBaselineableMetricsEvaluate.Builder.create(Construct scope, java.lang.String id)
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
    .baselineableMetricId(java.lang.String)
    .items(IResolvable)
    .items(java.util.List<DataOciStackMonitoringBaselineableMetricsEvaluateItems>)
    .resourceId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.baselineableMetricId">baselineableMetricId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#baselineable_metric_id DataOciStackMonitoringBaselineableMetricsEvaluate#baselineable_metric_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.items">items</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems">DataOciStackMonitoringBaselineableMetricsEvaluateItems</a>></code> | items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#resource_id DataOciStackMonitoringBaselineableMetricsEvaluate#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#id DataOciStackMonitoringBaselineableMetricsEvaluate#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `baselineableMetricId`<sup>Required</sup> <a name="baselineableMetricId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.baselineableMetricId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#baselineable_metric_id DataOciStackMonitoringBaselineableMetricsEvaluate#baselineable_metric_id}.

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.items"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems">DataOciStackMonitoringBaselineableMetricsEvaluateItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#items DataOciStackMonitoringBaselineableMetricsEvaluate#items}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#resource_id DataOciStackMonitoringBaselineableMetricsEvaluate#resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#id DataOciStackMonitoringBaselineableMetricsEvaluate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.putItems">putItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.putItems"></a>

```java
public void putItems(IResolvable OR java.util.List<DataOciStackMonitoringBaselineableMetricsEvaluateItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.putItems.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems">DataOciStackMonitoringBaselineableMetricsEvaluateItems</a>>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringBaselineableMetricsEvaluate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluate;

DataOciStackMonitoringBaselineableMetricsEvaluate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluate;

DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluate;

DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluate;

DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciStackMonitoringBaselineableMetricsEvaluate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciStackMonitoringBaselineableMetricsEvaluate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciStackMonitoringBaselineableMetricsEvaluate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringBaselineableMetricsEvaluate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.dataPoints">dataPoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.baselineableMetricIdInput">baselineableMetricIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.itemsInput">itemsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems">DataOciStackMonitoringBaselineableMetricsEvaluateItems</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.baselineableMetricId">baselineableMetricId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dataPoints`<sup>Required</sup> <a name="dataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.dataPoints"></a>

```java
public DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList getDataPoints();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList</a>

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.items"></a>

```java
public DataOciStackMonitoringBaselineableMetricsEvaluateItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsList</a>

---

##### `baselineableMetricIdInput`<sup>Optional</sup> <a name="baselineableMetricIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.baselineableMetricIdInput"></a>

```java
public java.lang.String getBaselineableMetricIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.itemsInput"></a>

```java
public java.lang.Object getItemsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems">DataOciStackMonitoringBaselineableMetricsEvaluateItems</a>>

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `baselineableMetricId`<sup>Required</sup> <a name="baselineableMetricId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.baselineableMetricId"></a>

```java
public java.lang.String getBaselineableMetricId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringBaselineableMetricsEvaluateConfig <a name="DataOciStackMonitoringBaselineableMetricsEvaluateConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig;

DataOciStackMonitoringBaselineableMetricsEvaluateConfig.builder()
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
    .baselineableMetricId(java.lang.String)
    .items(IResolvable)
    .items(java.util.List<DataOciStackMonitoringBaselineableMetricsEvaluateItems>)
    .resourceId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.baselineableMetricId">baselineableMetricId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#baselineable_metric_id DataOciStackMonitoringBaselineableMetricsEvaluate#baselineable_metric_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.items">items</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems">DataOciStackMonitoringBaselineableMetricsEvaluateItems</a>></code> | items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#resource_id DataOciStackMonitoringBaselineableMetricsEvaluate#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#id DataOciStackMonitoringBaselineableMetricsEvaluate#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `baselineableMetricId`<sup>Required</sup> <a name="baselineableMetricId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.baselineableMetricId"></a>

```java
public java.lang.String getBaselineableMetricId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#baselineable_metric_id DataOciStackMonitoringBaselineableMetricsEvaluate#baselineable_metric_id}.

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.items"></a>

```java
public java.lang.Object getItems();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems">DataOciStackMonitoringBaselineableMetricsEvaluateItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#items DataOciStackMonitoringBaselineableMetricsEvaluate#items}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#resource_id DataOciStackMonitoringBaselineableMetricsEvaluate#resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#id DataOciStackMonitoringBaselineableMetricsEvaluate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints <a name="DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints;

DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints.builder()
    .build();
```


### DataOciStackMonitoringBaselineableMetricsEvaluateItems <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems;

DataOciStackMonitoringBaselineableMetricsEvaluateItems.builder()
    .evaluationDataPoints(IResolvable)
    .evaluationDataPoints(java.util.List<DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints>)
    .trainingDataPoints(IResolvable)
    .trainingDataPoints(java.util.List<DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints>)
//  .dimensions(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.evaluationDataPoints">evaluationDataPoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints</a>></code> | evaluation_data_points block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.trainingDataPoints">trainingDataPoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints</a>></code> | training_data_points block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#dimensions DataOciStackMonitoringBaselineableMetricsEvaluate#dimensions}. |

---

##### `evaluationDataPoints`<sup>Required</sup> <a name="evaluationDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.evaluationDataPoints"></a>

```java
public java.lang.Object getEvaluationDataPoints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints</a>>

evaluation_data_points block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#evaluation_data_points DataOciStackMonitoringBaselineableMetricsEvaluate#evaluation_data_points}

---

##### `trainingDataPoints`<sup>Required</sup> <a name="trainingDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.trainingDataPoints"></a>

```java
public java.lang.Object getTrainingDataPoints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints</a>>

training_data_points block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#training_data_points DataOciStackMonitoringBaselineableMetricsEvaluate#training_data_points}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#dimensions DataOciStackMonitoringBaselineableMetricsEvaluate#dimensions}.

---

### DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints;

DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints.builder()
    .build();
```


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints;

DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints.builder()
    .timestamp(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#timestamp DataOciStackMonitoringBaselineableMetricsEvaluate#timestamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#value DataOciStackMonitoringBaselineableMetricsEvaluate#value}. |

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#timestamp DataOciStackMonitoringBaselineableMetricsEvaluate#timestamp}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#value DataOciStackMonitoringBaselineableMetricsEvaluate#value}.

---

### DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints;

DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints.builder()
    .timestamp(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#timestamp DataOciStackMonitoringBaselineableMetricsEvaluate#timestamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#value DataOciStackMonitoringBaselineableMetricsEvaluate#value}. |

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#timestamp DataOciStackMonitoringBaselineableMetricsEvaluate#timestamp}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics_evaluate#value DataOciStackMonitoringBaselineableMetricsEvaluate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList <a name="DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList;

new DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.get"></a>

```java
public DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference <a name="DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference;

new DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.anomaly">anomaly</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.high">high</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.low">low</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anomaly`<sup>Required</sup> <a name="anomaly" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.anomaly"></a>

```java
public java.lang.Number getAnomaly();
```

- *Type:* java.lang.Number

---

##### `high`<sup>Required</sup> <a name="high" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.high"></a>

```java
public java.lang.Number getHigh();
```

- *Type:* java.lang.Number

---

##### `low`<sup>Required</sup> <a name="low" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.low"></a>

```java
public java.lang.Number getLow();
```

- *Type:* java.lang.Number

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPointsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateDataPoints</a>

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.get"></a>

```java
public DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.anomaly">anomaly</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.high">high</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.low">low</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anomaly`<sup>Required</sup> <a name="anomaly" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.anomaly"></a>

```java
public java.lang.Number getAnomaly();
```

- *Type:* java.lang.Number

---

##### `high`<sup>Required</sup> <a name="high" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.high"></a>

```java
public java.lang.Number getHigh();
```

- *Type:* java.lang.Number

---

##### `low`<sup>Required</sup> <a name="low" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.low"></a>

```java
public java.lang.Number getLow();
```

- *Type:* java.lang.Number

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPoints</a>

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.get"></a>

```java
public DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints</a>>

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.timestampInput">timestampInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.timestampInput"></a>

```java
public java.lang.String getTimestampInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints</a>

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsList <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.get"></a>

```java
public DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems">DataOciStackMonitoringBaselineableMetricsEvaluateItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems">DataOciStackMonitoringBaselineableMetricsEvaluateItems</a>>

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putEvaluationDataPoints">putEvaluationDataPoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putTrainingDataPoints">putTrainingDataPoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEvaluationDataPoints` <a name="putEvaluationDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putEvaluationDataPoints"></a>

```java
public void putEvaluationDataPoints(IResolvable OR java.util.List<DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putEvaluationDataPoints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints</a>>

---

##### `putTrainingDataPoints` <a name="putTrainingDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putTrainingDataPoints"></a>

```java
public void putTrainingDataPoints(IResolvable OR java.util.List<DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.putTrainingDataPoints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints</a>>

---

##### `resetDimensions` <a name="resetDimensions" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dataPoints">dataPoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.evaluationDataPoints">evaluationDataPoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.trainingDataPoints">trainingDataPoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.evaluationDataPointsInput">evaluationDataPointsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.trainingDataPointsInput">trainingDataPointsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems">DataOciStackMonitoringBaselineableMetricsEvaluateItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataPoints`<sup>Required</sup> <a name="dataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dataPoints"></a>

```java
public DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList getDataPoints();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsDataPointsList</a>

---

##### `evaluationDataPoints`<sup>Required</sup> <a name="evaluationDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.evaluationDataPoints"></a>

```java
public DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList getEvaluationDataPoints();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPointsList</a>

---

##### `trainingDataPoints`<sup>Required</sup> <a name="trainingDataPoints" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.trainingDataPoints"></a>

```java
public DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList getTrainingDataPoints();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList">DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dimensionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `evaluationDataPointsInput`<sup>Optional</sup> <a name="evaluationDataPointsInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.evaluationDataPointsInput"></a>

```java
public java.lang.Object getEvaluationDataPointsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsEvaluationDataPoints</a>>

---

##### `trainingDataPointsInput`<sup>Optional</sup> <a name="trainingDataPointsInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.trainingDataPointsInput"></a>

```java
public java.lang.Object getTrainingDataPointsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints</a>>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItems">DataOciStackMonitoringBaselineableMetricsEvaluateItems</a>

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.get"></a>

```java
public DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints</a>>

---


### DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference <a name="DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_baselineable_metrics_evaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference;

new DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.timestampInput">timestampInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.timestampInput"></a>

```java
public java.lang.String getTimestampInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPointsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetricsEvaluate.DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints">DataOciStackMonitoringBaselineableMetricsEvaluateItemsTrainingDataPoints</a>

---



