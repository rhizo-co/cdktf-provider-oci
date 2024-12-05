# `meteringComputationUsage` Submodule <a name="`meteringComputationUsage` Submodule" id="rhizo-co-terraform-provider-oci.meteringComputationUsage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MeteringComputationUsage <a name="MeteringComputationUsage" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage oci_metering_computation_usage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsage;

MeteringComputationUsage.Builder.create(Construct scope, java.lang.String id)
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
    .granularity(java.lang.String)
    .tenantId(java.lang.String)
    .timeUsageEnded(java.lang.String)
    .timeUsageStarted(java.lang.String)
//  .compartmentDepth(java.lang.Number)
//  .filter(java.lang.String)
//  .forecast(MeteringComputationUsageForecast)
//  .groupBy(java.util.List<java.lang.String>)
//  .groupByTag(IResolvable)
//  .groupByTag(java.util.List<MeteringComputationUsageGroupByTag>)
//  .id(java.lang.String)
//  .isAggregateByTime(java.lang.Boolean)
//  .isAggregateByTime(IResolvable)
//  .queryType(java.lang.String)
//  .timeouts(MeteringComputationUsageTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.granularity">granularity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#granularity MeteringComputationUsage#granularity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#tenant_id MeteringComputationUsage#tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.timeUsageEnded">timeUsageEnded</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#time_usage_ended MeteringComputationUsage#time_usage_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.timeUsageStarted">timeUsageStarted</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#time_usage_started MeteringComputationUsage#time_usage_started}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.compartmentDepth">compartmentDepth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#compartment_depth MeteringComputationUsage#compartment_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#filter MeteringComputationUsage#filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.forecast">forecast</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecast">MeteringComputationUsageForecast</a></code> | forecast block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#group_by MeteringComputationUsage#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.groupByTag">groupByTag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag">MeteringComputationUsageGroupByTag</a>></code> | group_by_tag block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#id MeteringComputationUsage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.isAggregateByTime">isAggregateByTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#is_aggregate_by_time MeteringComputationUsage#is_aggregate_by_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.queryType">queryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#query_type MeteringComputationUsage#query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeouts">MeteringComputationUsageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.granularity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#granularity MeteringComputationUsage#granularity}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#tenant_id MeteringComputationUsage#tenant_id}.

---

##### `timeUsageEnded`<sup>Required</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.timeUsageEnded"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#time_usage_ended MeteringComputationUsage#time_usage_ended}.

---

##### `timeUsageStarted`<sup>Required</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.timeUsageStarted"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#time_usage_started MeteringComputationUsage#time_usage_started}.

---

##### `compartmentDepth`<sup>Optional</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.compartmentDepth"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#compartment_depth MeteringComputationUsage#compartment_depth}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#filter MeteringComputationUsage#filter}.

---

##### `forecast`<sup>Optional</sup> <a name="forecast" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.forecast"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecast">MeteringComputationUsageForecast</a>

forecast block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#forecast MeteringComputationUsage#forecast}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.groupBy"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#group_by MeteringComputationUsage#group_by}.

---

##### `groupByTag`<sup>Optional</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.groupByTag"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag">MeteringComputationUsageGroupByTag</a>>

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#group_by_tag MeteringComputationUsage#group_by_tag}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#id MeteringComputationUsage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAggregateByTime`<sup>Optional</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.isAggregateByTime"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#is_aggregate_by_time MeteringComputationUsage#is_aggregate_by_time}.

---

##### `queryType`<sup>Optional</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.queryType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#query_type MeteringComputationUsage#query_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeouts">MeteringComputationUsageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#timeouts MeteringComputationUsage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.putForecast">putForecast</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.putGroupByTag">putGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetCompartmentDepth">resetCompartmentDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetForecast">resetForecast</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetGroupByTag">resetGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetIsAggregateByTime">resetIsAggregateByTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetQueryType">resetQueryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putForecast` <a name="putForecast" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.putForecast"></a>

```java
public void putForecast(MeteringComputationUsageForecast value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.putForecast.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecast">MeteringComputationUsageForecast</a>

---

##### `putGroupByTag` <a name="putGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.putGroupByTag"></a>

```java
public void putGroupByTag(IResolvable OR java.util.List<MeteringComputationUsageGroupByTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.putGroupByTag.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag">MeteringComputationUsageGroupByTag</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.putTimeouts"></a>

```java
public void putTimeouts(MeteringComputationUsageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeouts">MeteringComputationUsageTimeouts</a>

---

##### `resetCompartmentDepth` <a name="resetCompartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetCompartmentDepth"></a>

```java
public void resetCompartmentDepth()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetForecast` <a name="resetForecast" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetForecast"></a>

```java
public void resetForecast()
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetGroupBy"></a>

```java
public void resetGroupBy()
```

##### `resetGroupByTag` <a name="resetGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetGroupByTag"></a>

```java
public void resetGroupByTag()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetId"></a>

```java
public void resetId()
```

##### `resetIsAggregateByTime` <a name="resetIsAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetIsAggregateByTime"></a>

```java
public void resetIsAggregateByTime()
```

##### `resetQueryType` <a name="resetQueryType" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetQueryType"></a>

```java
public void resetQueryType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MeteringComputationUsage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsage;

MeteringComputationUsage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsage;

MeteringComputationUsage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsage;

MeteringComputationUsage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsage;

MeteringComputationUsage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MeteringComputationUsage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MeteringComputationUsage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MeteringComputationUsage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MeteringComputationUsage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MeteringComputationUsage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.forecast">forecast</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference">MeteringComputationUsageForecastOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.groupByTag">groupByTag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList">MeteringComputationUsageGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList">MeteringComputationUsageItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference">MeteringComputationUsageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.compartmentDepthInput">compartmentDepthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.forecastInput">forecastInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecast">MeteringComputationUsageForecast</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.granularityInput">granularityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.groupByInput">groupByInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.groupByTagInput">groupByTagInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag">MeteringComputationUsageGroupByTag</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.isAggregateByTimeInput">isAggregateByTimeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.queryTypeInput">queryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeouts">MeteringComputationUsageTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.timeUsageEndedInput">timeUsageEndedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.timeUsageStartedInput">timeUsageStartedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.compartmentDepth">compartmentDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.granularity">granularity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.isAggregateByTime">isAggregateByTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.queryType">queryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.timeUsageEnded">timeUsageEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.timeUsageStarted">timeUsageStarted</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `forecast`<sup>Required</sup> <a name="forecast" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.forecast"></a>

```java
public MeteringComputationUsageForecastOutputReference getForecast();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference">MeteringComputationUsageForecastOutputReference</a>

---

##### `groupByTag`<sup>Required</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.groupByTag"></a>

```java
public MeteringComputationUsageGroupByTagList getGroupByTag();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList">MeteringComputationUsageGroupByTagList</a>

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.items"></a>

```java
public MeteringComputationUsageItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList">MeteringComputationUsageItemsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.timeouts"></a>

```java
public MeteringComputationUsageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference">MeteringComputationUsageTimeoutsOutputReference</a>

---

##### `compartmentDepthInput`<sup>Optional</sup> <a name="compartmentDepthInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.compartmentDepthInput"></a>

```java
public java.lang.Number getCompartmentDepthInput();
```

- *Type:* java.lang.Number

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `forecastInput`<sup>Optional</sup> <a name="forecastInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.forecastInput"></a>

```java
public MeteringComputationUsageForecast getForecastInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecast">MeteringComputationUsageForecast</a>

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.granularityInput"></a>

```java
public java.lang.String getGranularityInput();
```

- *Type:* java.lang.String

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.groupByInput"></a>

```java
public java.util.List<java.lang.String> getGroupByInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupByTagInput`<sup>Optional</sup> <a name="groupByTagInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.groupByTagInput"></a>

```java
public java.lang.Object getGroupByTagInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag">MeteringComputationUsageGroupByTag</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isAggregateByTimeInput`<sup>Optional</sup> <a name="isAggregateByTimeInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.isAggregateByTimeInput"></a>

```java
public java.lang.Object getIsAggregateByTimeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryTypeInput`<sup>Optional</sup> <a name="queryTypeInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.queryTypeInput"></a>

```java
public java.lang.String getQueryTypeInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeouts">MeteringComputationUsageTimeouts</a>

---

##### `timeUsageEndedInput`<sup>Optional</sup> <a name="timeUsageEndedInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.timeUsageEndedInput"></a>

```java
public java.lang.String getTimeUsageEndedInput();
```

- *Type:* java.lang.String

---

##### `timeUsageStartedInput`<sup>Optional</sup> <a name="timeUsageStartedInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.timeUsageStartedInput"></a>

```java
public java.lang.String getTimeUsageStartedInput();
```

- *Type:* java.lang.String

---

##### `compartmentDepth`<sup>Required</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.compartmentDepth"></a>

```java
public java.lang.Number getCompartmentDepth();
```

- *Type:* java.lang.Number

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAggregateByTime`<sup>Required</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.isAggregateByTime"></a>

```java
public java.lang.Object getIsAggregateByTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.queryType"></a>

```java
public java.lang.String getQueryType();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `timeUsageEnded`<sup>Required</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.timeUsageEnded"></a>

```java
public java.lang.String getTimeUsageEnded();
```

- *Type:* java.lang.String

---

##### `timeUsageStarted`<sup>Required</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.timeUsageStarted"></a>

```java
public java.lang.String getTimeUsageStarted();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MeteringComputationUsageConfig <a name="MeteringComputationUsageConfig" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsageConfig;

MeteringComputationUsageConfig.builder()
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
    .granularity(java.lang.String)
    .tenantId(java.lang.String)
    .timeUsageEnded(java.lang.String)
    .timeUsageStarted(java.lang.String)
//  .compartmentDepth(java.lang.Number)
//  .filter(java.lang.String)
//  .forecast(MeteringComputationUsageForecast)
//  .groupBy(java.util.List<java.lang.String>)
//  .groupByTag(IResolvable)
//  .groupByTag(java.util.List<MeteringComputationUsageGroupByTag>)
//  .id(java.lang.String)
//  .isAggregateByTime(java.lang.Boolean)
//  .isAggregateByTime(IResolvable)
//  .queryType(java.lang.String)
//  .timeouts(MeteringComputationUsageTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.granularity">granularity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#granularity MeteringComputationUsage#granularity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#tenant_id MeteringComputationUsage#tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.timeUsageEnded">timeUsageEnded</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#time_usage_ended MeteringComputationUsage#time_usage_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.timeUsageStarted">timeUsageStarted</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#time_usage_started MeteringComputationUsage#time_usage_started}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.compartmentDepth">compartmentDepth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#compartment_depth MeteringComputationUsage#compartment_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#filter MeteringComputationUsage#filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.forecast">forecast</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecast">MeteringComputationUsageForecast</a></code> | forecast block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#group_by MeteringComputationUsage#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.groupByTag">groupByTag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag">MeteringComputationUsageGroupByTag</a>></code> | group_by_tag block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#id MeteringComputationUsage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.isAggregateByTime">isAggregateByTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#is_aggregate_by_time MeteringComputationUsage#is_aggregate_by_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.queryType">queryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#query_type MeteringComputationUsage#query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeouts">MeteringComputationUsageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#granularity MeteringComputationUsage#granularity}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#tenant_id MeteringComputationUsage#tenant_id}.

---

##### `timeUsageEnded`<sup>Required</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.timeUsageEnded"></a>

```java
public java.lang.String getTimeUsageEnded();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#time_usage_ended MeteringComputationUsage#time_usage_ended}.

---

##### `timeUsageStarted`<sup>Required</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.timeUsageStarted"></a>

```java
public java.lang.String getTimeUsageStarted();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#time_usage_started MeteringComputationUsage#time_usage_started}.

---

##### `compartmentDepth`<sup>Optional</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.compartmentDepth"></a>

```java
public java.lang.Number getCompartmentDepth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#compartment_depth MeteringComputationUsage#compartment_depth}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#filter MeteringComputationUsage#filter}.

---

##### `forecast`<sup>Optional</sup> <a name="forecast" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.forecast"></a>

```java
public MeteringComputationUsageForecast getForecast();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecast">MeteringComputationUsageForecast</a>

forecast block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#forecast MeteringComputationUsage#forecast}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#group_by MeteringComputationUsage#group_by}.

---

##### `groupByTag`<sup>Optional</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.groupByTag"></a>

```java
public java.lang.Object getGroupByTag();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag">MeteringComputationUsageGroupByTag</a>>

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#group_by_tag MeteringComputationUsage#group_by_tag}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#id MeteringComputationUsage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAggregateByTime`<sup>Optional</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.isAggregateByTime"></a>

```java
public java.lang.Object getIsAggregateByTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#is_aggregate_by_time MeteringComputationUsage#is_aggregate_by_time}.

---

##### `queryType`<sup>Optional</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.queryType"></a>

```java
public java.lang.String getQueryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#query_type MeteringComputationUsage#query_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageConfig.property.timeouts"></a>

```java
public MeteringComputationUsageTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeouts">MeteringComputationUsageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#timeouts MeteringComputationUsage#timeouts}

---

### MeteringComputationUsageForecast <a name="MeteringComputationUsageForecast" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecast"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecast.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsageForecast;

MeteringComputationUsageForecast.builder()
    .timeForecastEnded(java.lang.String)
//  .forecastType(java.lang.String)
//  .timeForecastStarted(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecast.property.timeForecastEnded">timeForecastEnded</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#time_forecast_ended MeteringComputationUsage#time_forecast_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecast.property.forecastType">forecastType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#forecast_type MeteringComputationUsage#forecast_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecast.property.timeForecastStarted">timeForecastStarted</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#time_forecast_started MeteringComputationUsage#time_forecast_started}. |

---

##### `timeForecastEnded`<sup>Required</sup> <a name="timeForecastEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecast.property.timeForecastEnded"></a>

```java
public java.lang.String getTimeForecastEnded();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#time_forecast_ended MeteringComputationUsage#time_forecast_ended}.

---

##### `forecastType`<sup>Optional</sup> <a name="forecastType" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecast.property.forecastType"></a>

```java
public java.lang.String getForecastType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#forecast_type MeteringComputationUsage#forecast_type}.

---

##### `timeForecastStarted`<sup>Optional</sup> <a name="timeForecastStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecast.property.timeForecastStarted"></a>

```java
public java.lang.String getTimeForecastStarted();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#time_forecast_started MeteringComputationUsage#time_forecast_started}.

---

### MeteringComputationUsageGroupByTag <a name="MeteringComputationUsageGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsageGroupByTag;

MeteringComputationUsageGroupByTag.builder()
//  .key(java.lang.String)
//  .namespace(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#key MeteringComputationUsage#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#namespace MeteringComputationUsage#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#value MeteringComputationUsage#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#key MeteringComputationUsage#key}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#namespace MeteringComputationUsage#namespace}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#value MeteringComputationUsage#value}.

---

### MeteringComputationUsageItems <a name="MeteringComputationUsageItems" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsageItems;

MeteringComputationUsageItems.builder()
    .build();
```


### MeteringComputationUsageItemsTags <a name="MeteringComputationUsageItemsTags" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsageItemsTags;

MeteringComputationUsageItemsTags.builder()
    .build();
```


### MeteringComputationUsageTimeouts <a name="MeteringComputationUsageTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsageTimeouts;

MeteringComputationUsageTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#create MeteringComputationUsage#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#delete MeteringComputationUsage#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#update MeteringComputationUsage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#create MeteringComputationUsage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#delete MeteringComputationUsage#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage#update MeteringComputationUsage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MeteringComputationUsageForecastOutputReference <a name="MeteringComputationUsageForecastOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsageForecastOutputReference;

new MeteringComputationUsageForecastOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.resetForecastType">resetForecastType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.resetTimeForecastStarted">resetTimeForecastStarted</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForecastType` <a name="resetForecastType" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.resetForecastType"></a>

```java
public void resetForecastType()
```

##### `resetTimeForecastStarted` <a name="resetTimeForecastStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.resetTimeForecastStarted"></a>

```java
public void resetTimeForecastStarted()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.forecastTypeInput">forecastTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.timeForecastEndedInput">timeForecastEndedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.timeForecastStartedInput">timeForecastStartedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.forecastType">forecastType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.timeForecastEnded">timeForecastEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.timeForecastStarted">timeForecastStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecast">MeteringComputationUsageForecast</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forecastTypeInput`<sup>Optional</sup> <a name="forecastTypeInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.forecastTypeInput"></a>

```java
public java.lang.String getForecastTypeInput();
```

- *Type:* java.lang.String

---

##### `timeForecastEndedInput`<sup>Optional</sup> <a name="timeForecastEndedInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.timeForecastEndedInput"></a>

```java
public java.lang.String getTimeForecastEndedInput();
```

- *Type:* java.lang.String

---

##### `timeForecastStartedInput`<sup>Optional</sup> <a name="timeForecastStartedInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.timeForecastStartedInput"></a>

```java
public java.lang.String getTimeForecastStartedInput();
```

- *Type:* java.lang.String

---

##### `forecastType`<sup>Required</sup> <a name="forecastType" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.forecastType"></a>

```java
public java.lang.String getForecastType();
```

- *Type:* java.lang.String

---

##### `timeForecastEnded`<sup>Required</sup> <a name="timeForecastEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.timeForecastEnded"></a>

```java
public java.lang.String getTimeForecastEnded();
```

- *Type:* java.lang.String

---

##### `timeForecastStarted`<sup>Required</sup> <a name="timeForecastStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.timeForecastStarted"></a>

```java
public java.lang.String getTimeForecastStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecastOutputReference.property.internalValue"></a>

```java
public MeteringComputationUsageForecast getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageForecast">MeteringComputationUsageForecast</a>

---


### MeteringComputationUsageGroupByTagList <a name="MeteringComputationUsageGroupByTagList" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsageGroupByTagList;

new MeteringComputationUsageGroupByTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.get"></a>

```java
public MeteringComputationUsageGroupByTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag">MeteringComputationUsageGroupByTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag">MeteringComputationUsageGroupByTag</a>>

---


### MeteringComputationUsageGroupByTagOutputReference <a name="MeteringComputationUsageGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsageGroupByTagOutputReference;

new MeteringComputationUsageGroupByTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag">MeteringComputationUsageGroupByTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTagOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageGroupByTag">MeteringComputationUsageGroupByTag</a>

---


### MeteringComputationUsageItemsList <a name="MeteringComputationUsageItemsList" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsageItemsList;

new MeteringComputationUsageItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.get"></a>

```java
public MeteringComputationUsageItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MeteringComputationUsageItemsOutputReference <a name="MeteringComputationUsageItemsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsageItemsOutputReference;

new MeteringComputationUsageItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.ad">ad</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.attributedCost">attributedCost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.attributedUsage">attributedUsage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.compartmentName">compartmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.compartmentPath">compartmentPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.computedAmount">computedAmount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.computedQuantity">computedQuantity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.currency">currency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.discount">discount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.isForecast">isForecast</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.listRate">listRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.overage">overage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.overagesFlag">overagesFlag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.skuPartNumber">skuPartNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList">MeteringComputationUsageItemsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.tenantName">tenantName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.timeUsageEnded">timeUsageEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.timeUsageStarted">timeUsageStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.unitPrice">unitPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItems">MeteringComputationUsageItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.ad"></a>

```java
public java.lang.String getAd();
```

- *Type:* java.lang.String

---

##### `attributedCost`<sup>Required</sup> <a name="attributedCost" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.attributedCost"></a>

```java
public java.lang.String getAttributedCost();
```

- *Type:* java.lang.String

---

##### `attributedUsage`<sup>Required</sup> <a name="attributedUsage" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.attributedUsage"></a>

```java
public java.lang.String getAttributedUsage();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentName`<sup>Required</sup> <a name="compartmentName" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.compartmentName"></a>

```java
public java.lang.String getCompartmentName();
```

- *Type:* java.lang.String

---

##### `compartmentPath`<sup>Required</sup> <a name="compartmentPath" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.compartmentPath"></a>

```java
public java.lang.String getCompartmentPath();
```

- *Type:* java.lang.String

---

##### `computedAmount`<sup>Required</sup> <a name="computedAmount" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.computedAmount"></a>

```java
public java.lang.Number getComputedAmount();
```

- *Type:* java.lang.Number

---

##### `computedQuantity`<sup>Required</sup> <a name="computedQuantity" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.computedQuantity"></a>

```java
public java.lang.Number getComputedQuantity();
```

- *Type:* java.lang.Number

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.currency"></a>

```java
public java.lang.String getCurrency();
```

- *Type:* java.lang.String

---

##### `discount`<sup>Required</sup> <a name="discount" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.discount"></a>

```java
public java.lang.Number getDiscount();
```

- *Type:* java.lang.Number

---

##### `isForecast`<sup>Required</sup> <a name="isForecast" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.isForecast"></a>

```java
public IResolvable getIsForecast();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `listRate`<sup>Required</sup> <a name="listRate" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.listRate"></a>

```java
public java.lang.Number getListRate();
```

- *Type:* java.lang.Number

---

##### `overage`<sup>Required</sup> <a name="overage" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.overage"></a>

```java
public java.lang.String getOverage();
```

- *Type:* java.lang.String

---

##### `overagesFlag`<sup>Required</sup> <a name="overagesFlag" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.overagesFlag"></a>

```java
public java.lang.String getOveragesFlag();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `skuPartNumber`<sup>Required</sup> <a name="skuPartNumber" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.skuPartNumber"></a>

```java
public java.lang.String getSkuPartNumber();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.tags"></a>

```java
public MeteringComputationUsageItemsTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList">MeteringComputationUsageItemsTagsList</a>

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.tenantName"></a>

```java
public java.lang.String getTenantName();
```

- *Type:* java.lang.String

---

##### `timeUsageEnded`<sup>Required</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.timeUsageEnded"></a>

```java
public java.lang.String getTimeUsageEnded();
```

- *Type:* java.lang.String

---

##### `timeUsageStarted`<sup>Required</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.timeUsageStarted"></a>

```java
public java.lang.String getTimeUsageStarted();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `unitPrice`<sup>Required</sup> <a name="unitPrice" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.unitPrice"></a>

```java
public java.lang.Number getUnitPrice();
```

- *Type:* java.lang.Number

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsOutputReference.property.internalValue"></a>

```java
public MeteringComputationUsageItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItems">MeteringComputationUsageItems</a>

---


### MeteringComputationUsageItemsTagsList <a name="MeteringComputationUsageItemsTagsList" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsageItemsTagsList;

new MeteringComputationUsageItemsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.get"></a>

```java
public MeteringComputationUsageItemsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MeteringComputationUsageItemsTagsOutputReference <a name="MeteringComputationUsageItemsTagsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsageItemsTagsOutputReference;

new MeteringComputationUsageItemsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTags">MeteringComputationUsageItemsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTagsOutputReference.property.internalValue"></a>

```java
public MeteringComputationUsageItemsTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageItemsTags">MeteringComputationUsageItemsTags</a>

---


### MeteringComputationUsageTimeoutsOutputReference <a name="MeteringComputationUsageTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage.MeteringComputationUsageTimeoutsOutputReference;

new MeteringComputationUsageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeouts">MeteringComputationUsageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsage.MeteringComputationUsageTimeouts">MeteringComputationUsageTimeouts</a>

---



