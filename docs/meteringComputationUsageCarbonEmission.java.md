# `meteringComputationUsageCarbonEmission` Submodule <a name="`meteringComputationUsageCarbonEmission` Submodule" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MeteringComputationUsageCarbonEmission <a name="MeteringComputationUsageCarbonEmission" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission oci_metering_computation_usage_carbon_emission}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emission.MeteringComputationUsageCarbonEmission;

MeteringComputationUsageCarbonEmission.Builder.create(Construct scope, java.lang.String id)
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
    .tenantId(java.lang.String)
    .timeUsageEnded(java.lang.String)
    .timeUsageStarted(java.lang.String)
//  .compartmentDepth(java.lang.Number)
//  .groupBy(java.util.List<java.lang.String>)
//  .groupByTag(IResolvable)
//  .groupByTag(java.util.List<MeteringComputationUsageCarbonEmissionGroupByTag>)
//  .id(java.lang.String)
//  .isAggregateByTime(java.lang.Boolean)
//  .isAggregateByTime(IResolvable)
//  .timeouts(MeteringComputationUsageCarbonEmissionTimeouts)
//  .usageCarbonEmissionFilter(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#tenant_id MeteringComputationUsageCarbonEmission#tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.timeUsageEnded">timeUsageEnded</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_ended MeteringComputationUsageCarbonEmission#time_usage_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.timeUsageStarted">timeUsageStarted</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_started MeteringComputationUsageCarbonEmission#time_usage_started}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.compartmentDepth">compartmentDepth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#compartment_depth MeteringComputationUsageCarbonEmission#compartment_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by MeteringComputationUsageCarbonEmission#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.groupByTag">groupByTag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>></code> | group_by_tag block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#id MeteringComputationUsageCarbonEmission#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.isAggregateByTime">isAggregateByTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#is_aggregate_by_time MeteringComputationUsageCarbonEmission#is_aggregate_by_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.usageCarbonEmissionFilter">usageCarbonEmissionFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#usage_carbon_emission_filter MeteringComputationUsageCarbonEmission#usage_carbon_emission_filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#tenant_id MeteringComputationUsageCarbonEmission#tenant_id}.

---

##### `timeUsageEnded`<sup>Required</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.timeUsageEnded"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_ended MeteringComputationUsageCarbonEmission#time_usage_ended}.

---

##### `timeUsageStarted`<sup>Required</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.timeUsageStarted"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_started MeteringComputationUsageCarbonEmission#time_usage_started}.

---

##### `compartmentDepth`<sup>Optional</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.compartmentDepth"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#compartment_depth MeteringComputationUsageCarbonEmission#compartment_depth}.

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.groupBy"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by MeteringComputationUsageCarbonEmission#group_by}.

---

##### `groupByTag`<sup>Optional</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.groupByTag"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>>

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by_tag MeteringComputationUsageCarbonEmission#group_by_tag}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#id MeteringComputationUsageCarbonEmission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAggregateByTime`<sup>Optional</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.isAggregateByTime"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#is_aggregate_by_time MeteringComputationUsageCarbonEmission#is_aggregate_by_time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#timeouts MeteringComputationUsageCarbonEmission#timeouts}

---

##### `usageCarbonEmissionFilter`<sup>Optional</sup> <a name="usageCarbonEmissionFilter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.usageCarbonEmissionFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#usage_carbon_emission_filter MeteringComputationUsageCarbonEmission#usage_carbon_emission_filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putGroupByTag">putGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetCompartmentDepth">resetCompartmentDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetGroupByTag">resetGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetIsAggregateByTime">resetIsAggregateByTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetUsageCarbonEmissionFilter">resetUsageCarbonEmissionFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGroupByTag` <a name="putGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putGroupByTag"></a>

```java
public void putGroupByTag(IResolvable OR java.util.List<MeteringComputationUsageCarbonEmissionGroupByTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putGroupByTag.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putTimeouts"></a>

```java
public void putTimeouts(MeteringComputationUsageCarbonEmissionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a>

---

##### `resetCompartmentDepth` <a name="resetCompartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetCompartmentDepth"></a>

```java
public void resetCompartmentDepth()
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetGroupBy"></a>

```java
public void resetGroupBy()
```

##### `resetGroupByTag` <a name="resetGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetGroupByTag"></a>

```java
public void resetGroupByTag()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetId"></a>

```java
public void resetId()
```

##### `resetIsAggregateByTime` <a name="resetIsAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetIsAggregateByTime"></a>

```java
public void resetIsAggregateByTime()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUsageCarbonEmissionFilter` <a name="resetUsageCarbonEmissionFilter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetUsageCarbonEmissionFilter"></a>

```java
public void resetUsageCarbonEmissionFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MeteringComputationUsageCarbonEmission resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emission.MeteringComputationUsageCarbonEmission;

MeteringComputationUsageCarbonEmission.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emission.MeteringComputationUsageCarbonEmission;

MeteringComputationUsageCarbonEmission.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emission.MeteringComputationUsageCarbonEmission;

MeteringComputationUsageCarbonEmission.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emission.MeteringComputationUsageCarbonEmission;

MeteringComputationUsageCarbonEmission.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MeteringComputationUsageCarbonEmission.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MeteringComputationUsageCarbonEmission resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MeteringComputationUsageCarbonEmission to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MeteringComputationUsageCarbonEmission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MeteringComputationUsageCarbonEmission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByTag">groupByTag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList">MeteringComputationUsageCarbonEmissionGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList">MeteringComputationUsageCarbonEmissionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference">MeteringComputationUsageCarbonEmissionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.compartmentDepthInput">compartmentDepthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByInput">groupByInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByTagInput">groupByTagInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.isAggregateByTimeInput">isAggregateByTimeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageEndedInput">timeUsageEndedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageStartedInput">timeUsageStartedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.usageCarbonEmissionFilterInput">usageCarbonEmissionFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.compartmentDepth">compartmentDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.isAggregateByTime">isAggregateByTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageEnded">timeUsageEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageStarted">timeUsageStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.usageCarbonEmissionFilter">usageCarbonEmissionFilter</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupByTag`<sup>Required</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByTag"></a>

```java
public MeteringComputationUsageCarbonEmissionGroupByTagList getGroupByTag();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList">MeteringComputationUsageCarbonEmissionGroupByTagList</a>

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.items"></a>

```java
public MeteringComputationUsageCarbonEmissionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList">MeteringComputationUsageCarbonEmissionItemsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeouts"></a>

```java
public MeteringComputationUsageCarbonEmissionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference">MeteringComputationUsageCarbonEmissionTimeoutsOutputReference</a>

---

##### `compartmentDepthInput`<sup>Optional</sup> <a name="compartmentDepthInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.compartmentDepthInput"></a>

```java
public java.lang.Number getCompartmentDepthInput();
```

- *Type:* java.lang.Number

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByInput"></a>

```java
public java.util.List<java.lang.String> getGroupByInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupByTagInput`<sup>Optional</sup> <a name="groupByTagInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByTagInput"></a>

```java
public java.lang.Object getGroupByTagInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isAggregateByTimeInput`<sup>Optional</sup> <a name="isAggregateByTimeInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.isAggregateByTimeInput"></a>

```java
public java.lang.Object getIsAggregateByTimeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a>

---

##### `timeUsageEndedInput`<sup>Optional</sup> <a name="timeUsageEndedInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageEndedInput"></a>

```java
public java.lang.String getTimeUsageEndedInput();
```

- *Type:* java.lang.String

---

##### `timeUsageStartedInput`<sup>Optional</sup> <a name="timeUsageStartedInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageStartedInput"></a>

```java
public java.lang.String getTimeUsageStartedInput();
```

- *Type:* java.lang.String

---

##### `usageCarbonEmissionFilterInput`<sup>Optional</sup> <a name="usageCarbonEmissionFilterInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.usageCarbonEmissionFilterInput"></a>

```java
public java.lang.String getUsageCarbonEmissionFilterInput();
```

- *Type:* java.lang.String

---

##### `compartmentDepth`<sup>Required</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.compartmentDepth"></a>

```java
public java.lang.Number getCompartmentDepth();
```

- *Type:* java.lang.Number

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAggregateByTime`<sup>Required</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.isAggregateByTime"></a>

```java
public java.lang.Object getIsAggregateByTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `timeUsageEnded`<sup>Required</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageEnded"></a>

```java
public java.lang.String getTimeUsageEnded();
```

- *Type:* java.lang.String

---

##### `timeUsageStarted`<sup>Required</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageStarted"></a>

```java
public java.lang.String getTimeUsageStarted();
```

- *Type:* java.lang.String

---

##### `usageCarbonEmissionFilter`<sup>Required</sup> <a name="usageCarbonEmissionFilter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.usageCarbonEmissionFilter"></a>

```java
public java.lang.String getUsageCarbonEmissionFilter();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MeteringComputationUsageCarbonEmissionConfig <a name="MeteringComputationUsageCarbonEmissionConfig" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emission.MeteringComputationUsageCarbonEmissionConfig;

MeteringComputationUsageCarbonEmissionConfig.builder()
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
    .tenantId(java.lang.String)
    .timeUsageEnded(java.lang.String)
    .timeUsageStarted(java.lang.String)
//  .compartmentDepth(java.lang.Number)
//  .groupBy(java.util.List<java.lang.String>)
//  .groupByTag(IResolvable)
//  .groupByTag(java.util.List<MeteringComputationUsageCarbonEmissionGroupByTag>)
//  .id(java.lang.String)
//  .isAggregateByTime(java.lang.Boolean)
//  .isAggregateByTime(IResolvable)
//  .timeouts(MeteringComputationUsageCarbonEmissionTimeouts)
//  .usageCarbonEmissionFilter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#tenant_id MeteringComputationUsageCarbonEmission#tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeUsageEnded">timeUsageEnded</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_ended MeteringComputationUsageCarbonEmission#time_usage_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeUsageStarted">timeUsageStarted</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_started MeteringComputationUsageCarbonEmission#time_usage_started}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.compartmentDepth">compartmentDepth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#compartment_depth MeteringComputationUsageCarbonEmission#compartment_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by MeteringComputationUsageCarbonEmission#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.groupByTag">groupByTag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>></code> | group_by_tag block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#id MeteringComputationUsageCarbonEmission#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.isAggregateByTime">isAggregateByTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#is_aggregate_by_time MeteringComputationUsageCarbonEmission#is_aggregate_by_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.usageCarbonEmissionFilter">usageCarbonEmissionFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#usage_carbon_emission_filter MeteringComputationUsageCarbonEmission#usage_carbon_emission_filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#tenant_id MeteringComputationUsageCarbonEmission#tenant_id}.

---

##### `timeUsageEnded`<sup>Required</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeUsageEnded"></a>

```java
public java.lang.String getTimeUsageEnded();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_ended MeteringComputationUsageCarbonEmission#time_usage_ended}.

---

##### `timeUsageStarted`<sup>Required</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeUsageStarted"></a>

```java
public java.lang.String getTimeUsageStarted();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_started MeteringComputationUsageCarbonEmission#time_usage_started}.

---

##### `compartmentDepth`<sup>Optional</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.compartmentDepth"></a>

```java
public java.lang.Number getCompartmentDepth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#compartment_depth MeteringComputationUsageCarbonEmission#compartment_depth}.

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by MeteringComputationUsageCarbonEmission#group_by}.

---

##### `groupByTag`<sup>Optional</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.groupByTag"></a>

```java
public java.lang.Object getGroupByTag();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>>

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by_tag MeteringComputationUsageCarbonEmission#group_by_tag}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#id MeteringComputationUsageCarbonEmission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAggregateByTime`<sup>Optional</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.isAggregateByTime"></a>

```java
public java.lang.Object getIsAggregateByTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#is_aggregate_by_time MeteringComputationUsageCarbonEmission#is_aggregate_by_time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeouts"></a>

```java
public MeteringComputationUsageCarbonEmissionTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#timeouts MeteringComputationUsageCarbonEmission#timeouts}

---

##### `usageCarbonEmissionFilter`<sup>Optional</sup> <a name="usageCarbonEmissionFilter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.usageCarbonEmissionFilter"></a>

```java
public java.lang.String getUsageCarbonEmissionFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#usage_carbon_emission_filter MeteringComputationUsageCarbonEmission#usage_carbon_emission_filter}.

---

### MeteringComputationUsageCarbonEmissionGroupByTag <a name="MeteringComputationUsageCarbonEmissionGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emission.MeteringComputationUsageCarbonEmissionGroupByTag;

MeteringComputationUsageCarbonEmissionGroupByTag.builder()
//  .key(java.lang.String)
//  .namespace(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#key MeteringComputationUsageCarbonEmission#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#namespace MeteringComputationUsageCarbonEmission#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#value MeteringComputationUsageCarbonEmission#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#key MeteringComputationUsageCarbonEmission#key}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#namespace MeteringComputationUsageCarbonEmission#namespace}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#value MeteringComputationUsageCarbonEmission#value}.

---

### MeteringComputationUsageCarbonEmissionItems <a name="MeteringComputationUsageCarbonEmissionItems" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emission.MeteringComputationUsageCarbonEmissionItems;

MeteringComputationUsageCarbonEmissionItems.builder()
    .build();
```


### MeteringComputationUsageCarbonEmissionItemsTags <a name="MeteringComputationUsageCarbonEmissionItemsTags" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emission.MeteringComputationUsageCarbonEmissionItemsTags;

MeteringComputationUsageCarbonEmissionItemsTags.builder()
    .build();
```


### MeteringComputationUsageCarbonEmissionTimeouts <a name="MeteringComputationUsageCarbonEmissionTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emission.MeteringComputationUsageCarbonEmissionTimeouts;

MeteringComputationUsageCarbonEmissionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#create MeteringComputationUsageCarbonEmission#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#delete MeteringComputationUsageCarbonEmission#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#update MeteringComputationUsageCarbonEmission#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#create MeteringComputationUsageCarbonEmission#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#delete MeteringComputationUsageCarbonEmission#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#update MeteringComputationUsageCarbonEmission#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MeteringComputationUsageCarbonEmissionGroupByTagList <a name="MeteringComputationUsageCarbonEmissionGroupByTagList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emission.MeteringComputationUsageCarbonEmissionGroupByTagList;

new MeteringComputationUsageCarbonEmissionGroupByTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.get"></a>

```java
public MeteringComputationUsageCarbonEmissionGroupByTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>>

---


### MeteringComputationUsageCarbonEmissionGroupByTagOutputReference <a name="MeteringComputationUsageCarbonEmissionGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference;

new MeteringComputationUsageCarbonEmissionGroupByTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>

---


### MeteringComputationUsageCarbonEmissionItemsList <a name="MeteringComputationUsageCarbonEmissionItemsList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emission.MeteringComputationUsageCarbonEmissionItemsList;

new MeteringComputationUsageCarbonEmissionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.get"></a>

```java
public MeteringComputationUsageCarbonEmissionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MeteringComputationUsageCarbonEmissionItemsOutputReference <a name="MeteringComputationUsageCarbonEmissionItemsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emission.MeteringComputationUsageCarbonEmissionItemsOutputReference;

new MeteringComputationUsageCarbonEmissionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.ad">ad</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentName">compartmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentPath">compartmentPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.computedCarbonEmission">computedCarbonEmission</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.emissionCalculationMethod">emissionCalculationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.skuPartNumber">skuPartNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList">MeteringComputationUsageCarbonEmissionItemsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tenantName">tenantName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.timeUsageEnded">timeUsageEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.timeUsageStarted">timeUsageStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems">MeteringComputationUsageCarbonEmissionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.ad"></a>

```java
public java.lang.String getAd();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentName`<sup>Required</sup> <a name="compartmentName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentName"></a>

```java
public java.lang.String getCompartmentName();
```

- *Type:* java.lang.String

---

##### `compartmentPath`<sup>Required</sup> <a name="compartmentPath" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentPath"></a>

```java
public java.lang.String getCompartmentPath();
```

- *Type:* java.lang.String

---

##### `computedCarbonEmission`<sup>Required</sup> <a name="computedCarbonEmission" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.computedCarbonEmission"></a>

```java
public java.lang.Number getComputedCarbonEmission();
```

- *Type:* java.lang.Number

---

##### `emissionCalculationMethod`<sup>Required</sup> <a name="emissionCalculationMethod" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.emissionCalculationMethod"></a>

```java
public java.lang.String getEmissionCalculationMethod();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `skuPartNumber`<sup>Required</sup> <a name="skuPartNumber" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.skuPartNumber"></a>

```java
public java.lang.String getSkuPartNumber();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tags"></a>

```java
public MeteringComputationUsageCarbonEmissionItemsTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList">MeteringComputationUsageCarbonEmissionItemsTagsList</a>

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tenantName"></a>

```java
public java.lang.String getTenantName();
```

- *Type:* java.lang.String

---

##### `timeUsageEnded`<sup>Required</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.timeUsageEnded"></a>

```java
public java.lang.String getTimeUsageEnded();
```

- *Type:* java.lang.String

---

##### `timeUsageStarted`<sup>Required</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.timeUsageStarted"></a>

```java
public java.lang.String getTimeUsageStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.internalValue"></a>

```java
public MeteringComputationUsageCarbonEmissionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems">MeteringComputationUsageCarbonEmissionItems</a>

---


### MeteringComputationUsageCarbonEmissionItemsTagsList <a name="MeteringComputationUsageCarbonEmissionItemsTagsList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emission.MeteringComputationUsageCarbonEmissionItemsTagsList;

new MeteringComputationUsageCarbonEmissionItemsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.get"></a>

```java
public MeteringComputationUsageCarbonEmissionItemsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MeteringComputationUsageCarbonEmissionItemsTagsOutputReference <a name="MeteringComputationUsageCarbonEmissionItemsTagsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference;

new MeteringComputationUsageCarbonEmissionItemsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags">MeteringComputationUsageCarbonEmissionItemsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.internalValue"></a>

```java
public MeteringComputationUsageCarbonEmissionItemsTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags">MeteringComputationUsageCarbonEmissionItemsTags</a>

---


### MeteringComputationUsageCarbonEmissionTimeoutsOutputReference <a name="MeteringComputationUsageCarbonEmissionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference;

new MeteringComputationUsageCarbonEmissionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a>

---



