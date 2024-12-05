# `demandSignalOccDemandSignal` Submodule <a name="`demandSignalOccDemandSignal` Submodule" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DemandSignalOccDemandSignal <a name="DemandSignalOccDemandSignal" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal oci_demand_signal_occ_demand_signal}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.demand_signal_occ_demand_signal.DemandSignalOccDemandSignal;

DemandSignalOccDemandSignal.Builder.create(Construct scope, java.lang.String id)
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
    .isActive(java.lang.Boolean)
    .isActive(IResolvable)
    .occDemandSignals(IResolvable)
    .occDemandSignals(java.util.List<DemandSignalOccDemandSignalOccDemandSignals>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .occDemandSignalId(java.lang.String)
//  .patchOperations(IResolvable)
//  .patchOperations(java.util.List<DemandSignalOccDemandSignalPatchOperations>)
//  .timeouts(DemandSignalOccDemandSignalTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#compartment_id DemandSignalOccDemandSignal#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.isActive">isActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#is_active DemandSignalOccDemandSignal#is_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.occDemandSignals">occDemandSignals</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>></code> | occ_demand_signals block. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#defined_tags DemandSignalOccDemandSignal#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#display_name DemandSignalOccDemandSignal#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#freeform_tags DemandSignalOccDemandSignal#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#id DemandSignalOccDemandSignal#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.occDemandSignalId">occDemandSignalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signal_id DemandSignalOccDemandSignal#occ_demand_signal_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.patchOperations">patchOperations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>></code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#compartment_id DemandSignalOccDemandSignal#compartment_id}.

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.isActive"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#is_active DemandSignalOccDemandSignal#is_active}.

---

##### `occDemandSignals`<sup>Required</sup> <a name="occDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.occDemandSignals"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>>

occ_demand_signals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signals DemandSignalOccDemandSignal#occ_demand_signals}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#defined_tags DemandSignalOccDemandSignal#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#display_name DemandSignalOccDemandSignal#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#freeform_tags DemandSignalOccDemandSignal#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#id DemandSignalOccDemandSignal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `occDemandSignalId`<sup>Optional</sup> <a name="occDemandSignalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.occDemandSignalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signal_id DemandSignalOccDemandSignal#occ_demand_signal_id}.

---

##### `patchOperations`<sup>Optional</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.patchOperations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>>

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#patch_operations DemandSignalOccDemandSignal#patch_operations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#timeouts DemandSignalOccDemandSignal#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putOccDemandSignals">putOccDemandSignals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putPatchOperations">putPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOccDemandSignalId">resetOccDemandSignalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetPatchOperations">resetPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOccDemandSignals` <a name="putOccDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putOccDemandSignals"></a>

```java
public void putOccDemandSignals(IResolvable OR java.util.List<DemandSignalOccDemandSignalOccDemandSignals> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putOccDemandSignals.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>>

---

##### `putPatchOperations` <a name="putPatchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putPatchOperations"></a>

```java
public void putPatchOperations(IResolvable OR java.util.List<DemandSignalOccDemandSignalPatchOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putPatchOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putTimeouts"></a>

```java
public void putTimeouts(DemandSignalOccDemandSignalTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetId"></a>

```java
public void resetId()
```

##### `resetOccDemandSignalId` <a name="resetOccDemandSignalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOccDemandSignalId"></a>

```java
public void resetOccDemandSignalId()
```

##### `resetPatchOperations` <a name="resetPatchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetPatchOperations"></a>

```java
public void resetPatchOperations()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DemandSignalOccDemandSignal resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.demand_signal_occ_demand_signal.DemandSignalOccDemandSignal;

DemandSignalOccDemandSignal.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.demand_signal_occ_demand_signal.DemandSignalOccDemandSignal;

DemandSignalOccDemandSignal.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.demand_signal_occ_demand_signal.DemandSignalOccDemandSignal;

DemandSignalOccDemandSignal.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.demand_signal_occ_demand_signal.DemandSignalOccDemandSignal;

DemandSignalOccDemandSignal.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DemandSignalOccDemandSignal.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DemandSignalOccDemandSignal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DemandSignalOccDemandSignal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DemandSignalOccDemandSignal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DemandSignalOccDemandSignal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignals">occDemandSignals</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList">DemandSignalOccDemandSignalOccDemandSignalsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperations">patchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList">DemandSignalOccDemandSignalPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference">DemandSignalOccDemandSignalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActiveInput">isActiveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalIdInput">occDemandSignalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalsInput">occDemandSignalsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperationsInput">patchOperationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActive">isActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalId">occDemandSignalId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `occDemandSignals`<sup>Required</sup> <a name="occDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignals"></a>

```java
public DemandSignalOccDemandSignalOccDemandSignalsList getOccDemandSignals();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList">DemandSignalOccDemandSignalOccDemandSignalsList</a>

---

##### `patchOperations`<sup>Required</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperations"></a>

```java
public DemandSignalOccDemandSignalPatchOperationsList getPatchOperations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList">DemandSignalOccDemandSignalPatchOperationsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeouts"></a>

```java
public DemandSignalOccDemandSignalTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference">DemandSignalOccDemandSignalTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isActiveInput`<sup>Optional</sup> <a name="isActiveInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActiveInput"></a>

```java
public java.lang.Object getIsActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `occDemandSignalIdInput`<sup>Optional</sup> <a name="occDemandSignalIdInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalIdInput"></a>

```java
public java.lang.String getOccDemandSignalIdInput();
```

- *Type:* java.lang.String

---

##### `occDemandSignalsInput`<sup>Optional</sup> <a name="occDemandSignalsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalsInput"></a>

```java
public java.lang.Object getOccDemandSignalsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>>

---

##### `patchOperationsInput`<sup>Optional</sup> <a name="patchOperationsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperationsInput"></a>

```java
public java.lang.Object getPatchOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActive"></a>

```java
public java.lang.Object getIsActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `occDemandSignalId`<sup>Required</sup> <a name="occDemandSignalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalId"></a>

```java
public java.lang.String getOccDemandSignalId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DemandSignalOccDemandSignalConfig <a name="DemandSignalOccDemandSignalConfig" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.demand_signal_occ_demand_signal.DemandSignalOccDemandSignalConfig;

DemandSignalOccDemandSignalConfig.builder()
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
    .isActive(java.lang.Boolean)
    .isActive(IResolvable)
    .occDemandSignals(IResolvable)
    .occDemandSignals(java.util.List<DemandSignalOccDemandSignalOccDemandSignals>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .occDemandSignalId(java.lang.String)
//  .patchOperations(IResolvable)
//  .patchOperations(java.util.List<DemandSignalOccDemandSignalPatchOperations>)
//  .timeouts(DemandSignalOccDemandSignalTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#compartment_id DemandSignalOccDemandSignal#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.isActive">isActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#is_active DemandSignalOccDemandSignal#is_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignals">occDemandSignals</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>></code> | occ_demand_signals block. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#defined_tags DemandSignalOccDemandSignal#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#display_name DemandSignalOccDemandSignal#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#freeform_tags DemandSignalOccDemandSignal#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#id DemandSignalOccDemandSignal#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignalId">occDemandSignalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signal_id DemandSignalOccDemandSignal#occ_demand_signal_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.patchOperations">patchOperations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>></code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#compartment_id DemandSignalOccDemandSignal#compartment_id}.

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.isActive"></a>

```java
public java.lang.Object getIsActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#is_active DemandSignalOccDemandSignal#is_active}.

---

##### `occDemandSignals`<sup>Required</sup> <a name="occDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignals"></a>

```java
public java.lang.Object getOccDemandSignals();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>>

occ_demand_signals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signals DemandSignalOccDemandSignal#occ_demand_signals}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#defined_tags DemandSignalOccDemandSignal#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#display_name DemandSignalOccDemandSignal#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#freeform_tags DemandSignalOccDemandSignal#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#id DemandSignalOccDemandSignal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `occDemandSignalId`<sup>Optional</sup> <a name="occDemandSignalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignalId"></a>

```java
public java.lang.String getOccDemandSignalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signal_id DemandSignalOccDemandSignal#occ_demand_signal_id}.

---

##### `patchOperations`<sup>Optional</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.patchOperations"></a>

```java
public java.lang.Object getPatchOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>>

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#patch_operations DemandSignalOccDemandSignal#patch_operations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.timeouts"></a>

```java
public DemandSignalOccDemandSignalTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#timeouts DemandSignalOccDemandSignal#timeouts}

---

### DemandSignalOccDemandSignalOccDemandSignals <a name="DemandSignalOccDemandSignalOccDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.demand_signal_occ_demand_signal.DemandSignalOccDemandSignalOccDemandSignals;

DemandSignalOccDemandSignalOccDemandSignals.builder()
    .resourceType(java.lang.String)
    .units(java.lang.String)
    .values(IResolvable)
    .values(java.util.List<DemandSignalOccDemandSignalOccDemandSignalsValues>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#resource_type DemandSignalOccDemandSignal#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.units">units</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#units DemandSignalOccDemandSignal#units}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.values">values</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>></code> | values block. |

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#resource_type DemandSignalOccDemandSignal#resource_type}.

---

##### `units`<sup>Required</sup> <a name="units" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#units DemandSignalOccDemandSignal#units}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.values"></a>

```java
public java.lang.Object getValues();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#values DemandSignalOccDemandSignal#values}

---

### DemandSignalOccDemandSignalOccDemandSignalsValues <a name="DemandSignalOccDemandSignalOccDemandSignalsValues" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.demand_signal_occ_demand_signal.DemandSignalOccDemandSignalOccDemandSignalsValues;

DemandSignalOccDemandSignalOccDemandSignalsValues.builder()
    .timeExpected(java.lang.String)
    .value(java.lang.Number)
//  .comments(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.timeExpected">timeExpected</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#time_expected DemandSignalOccDemandSignal#time_expected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.comments">comments</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#comments DemandSignalOccDemandSignal#comments}. |

---

##### `timeExpected`<sup>Required</sup> <a name="timeExpected" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.timeExpected"></a>

```java
public java.lang.String getTimeExpected();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#time_expected DemandSignalOccDemandSignal#time_expected}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}.

---

##### `comments`<sup>Optional</sup> <a name="comments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.comments"></a>

```java
public java.lang.String getComments();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#comments DemandSignalOccDemandSignal#comments}.

---

### DemandSignalOccDemandSignalPatchOperations <a name="DemandSignalOccDemandSignalPatchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.demand_signal_occ_demand_signal.DemandSignalOccDemandSignalPatchOperations;

DemandSignalOccDemandSignalPatchOperations.builder()
    .from(java.lang.String)
    .operation(java.lang.String)
    .selection(java.lang.String)
    .value(java.util.Map<java.lang.String, java.lang.String>)
//  .position(java.lang.String)
//  .selectedItem(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#from DemandSignalOccDemandSignal#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.operation">operation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#operation DemandSignalOccDemandSignal#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selection">selection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selection DemandSignalOccDemandSignal#selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.value">value</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.position">position</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#position DemandSignalOccDemandSignal#position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selectedItem">selectedItem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selected_item DemandSignalOccDemandSignal#selected_item}. |

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#from DemandSignalOccDemandSignal#from}.

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#operation DemandSignalOccDemandSignal#operation}.

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selection"></a>

```java
public java.lang.String getSelection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selection DemandSignalOccDemandSignal#selection}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.value"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValue();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}.

---

##### `position`<sup>Optional</sup> <a name="position" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.position"></a>

```java
public java.lang.String getPosition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#position DemandSignalOccDemandSignal#position}.

---

##### `selectedItem`<sup>Optional</sup> <a name="selectedItem" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selectedItem"></a>

```java
public java.lang.String getSelectedItem();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selected_item DemandSignalOccDemandSignal#selected_item}.

---

### DemandSignalOccDemandSignalTimeouts <a name="DemandSignalOccDemandSignalTimeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.demand_signal_occ_demand_signal.DemandSignalOccDemandSignalTimeouts;

DemandSignalOccDemandSignalTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#create DemandSignalOccDemandSignal#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#delete DemandSignalOccDemandSignal#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#update DemandSignalOccDemandSignal#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#create DemandSignalOccDemandSignal#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#delete DemandSignalOccDemandSignal#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#update DemandSignalOccDemandSignal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DemandSignalOccDemandSignalOccDemandSignalsList <a name="DemandSignalOccDemandSignalOccDemandSignalsList" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.demand_signal_occ_demand_signal.DemandSignalOccDemandSignalOccDemandSignalsList;

new DemandSignalOccDemandSignalOccDemandSignalsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.get"></a>

```java
public DemandSignalOccDemandSignalOccDemandSignalsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>>

---


### DemandSignalOccDemandSignalOccDemandSignalsOutputReference <a name="DemandSignalOccDemandSignalOccDemandSignalsOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.demand_signal_occ_demand_signal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference;

new DemandSignalOccDemandSignalOccDemandSignalsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.putValues">putValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValues` <a name="putValues" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.putValues"></a>

```java
public void putValues(IResolvable OR java.util.List<DemandSignalOccDemandSignalOccDemandSignalsValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.putValues.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList">DemandSignalOccDemandSignalOccDemandSignalsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.unitsInput">unitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.valuesInput">valuesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.units">units</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.values"></a>

```java
public DemandSignalOccDemandSignalOccDemandSignalsValuesList getValues();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList">DemandSignalOccDemandSignalOccDemandSignalsValuesList</a>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.unitsInput"></a>

```java
public java.lang.String getUnitsInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.valuesInput"></a>

```java
public java.lang.Object getValuesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `units`<sup>Required</sup> <a name="units" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>

---


### DemandSignalOccDemandSignalOccDemandSignalsValuesList <a name="DemandSignalOccDemandSignalOccDemandSignalsValuesList" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.demand_signal_occ_demand_signal.DemandSignalOccDemandSignalOccDemandSignalsValuesList;

new DemandSignalOccDemandSignalOccDemandSignalsValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.get"></a>

```java
public DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>>

---


### DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference <a name="DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.demand_signal_occ_demand_signal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference;

new DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resetComments">resetComments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComments` <a name="resetComments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resetComments"></a>

```java
public void resetComments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.commentsInput">commentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpectedInput">timeExpectedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.comments">comments</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpected">timeExpected</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentsInput`<sup>Optional</sup> <a name="commentsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.commentsInput"></a>

```java
public java.lang.String getCommentsInput();
```

- *Type:* java.lang.String

---

##### `timeExpectedInput`<sup>Optional</sup> <a name="timeExpectedInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpectedInput"></a>

```java
public java.lang.String getTimeExpectedInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comments`<sup>Required</sup> <a name="comments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.comments"></a>

```java
public java.lang.String getComments();
```

- *Type:* java.lang.String

---

##### `timeExpected`<sup>Required</sup> <a name="timeExpected" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpected"></a>

```java
public java.lang.String getTimeExpected();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>

---


### DemandSignalOccDemandSignalPatchOperationsList <a name="DemandSignalOccDemandSignalPatchOperationsList" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.demand_signal_occ_demand_signal.DemandSignalOccDemandSignalPatchOperationsList;

new DemandSignalOccDemandSignalPatchOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.get"></a>

```java
public DemandSignalOccDemandSignalPatchOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>>

---


### DemandSignalOccDemandSignalPatchOperationsOutputReference <a name="DemandSignalOccDemandSignalPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.demand_signal_occ_demand_signal.DemandSignalOccDemandSignalPatchOperationsOutputReference;

new DemandSignalOccDemandSignalPatchOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetSelectedItem">resetSelectedItem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPosition` <a name="resetPosition" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetPosition"></a>

```java
public void resetPosition()
```

##### `resetSelectedItem` <a name="resetSelectedItem" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetSelectedItem"></a>

```java
public void resetSelectedItem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operationInput">operationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItemInput">selectedItemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectionInput">selectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.valueInput">valueInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.position">position</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItem">selectedItem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selection">selection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.value">value</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operationInput"></a>

```java
public java.lang.String getOperationInput();
```

- *Type:* java.lang.String

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.positionInput"></a>

```java
public java.lang.String getPositionInput();
```

- *Type:* java.lang.String

---

##### `selectedItemInput`<sup>Optional</sup> <a name="selectedItemInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItemInput"></a>

```java
public java.lang.String getSelectedItemInput();
```

- *Type:* java.lang.String

---

##### `selectionInput`<sup>Optional</sup> <a name="selectionInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectionInput"></a>

```java
public java.lang.String getSelectionInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.valueInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValueInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.position"></a>

```java
public java.lang.String getPosition();
```

- *Type:* java.lang.String

---

##### `selectedItem`<sup>Required</sup> <a name="selectedItem" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItem"></a>

```java
public java.lang.String getSelectedItem();
```

- *Type:* java.lang.String

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selection"></a>

```java
public java.lang.String getSelection();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.value"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValue();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>

---


### DemandSignalOccDemandSignalTimeoutsOutputReference <a name="DemandSignalOccDemandSignalTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.demand_signal_occ_demand_signal.DemandSignalOccDemandSignalTimeoutsOutputReference;

new DemandSignalOccDemandSignalTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>

---



