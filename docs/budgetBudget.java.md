# `budgetBudget` Submodule <a name="`budgetBudget` Submodule" id="rhizo-co-terraform-provider-oci.budgetBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BudgetBudget <a name="BudgetBudget" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget oci_budget_budget}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.budget_budget.BudgetBudget;

BudgetBudget.Builder.create(Construct scope, java.lang.String id)
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
    .amount(java.lang.Number)
    .compartmentId(java.lang.String)
    .resetPeriod(java.lang.String)
//  .budgetProcessingPeriodStartOffset(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .endDate(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .processingPeriodType(java.lang.String)
//  .startDate(java.lang.String)
//  .targetCompartmentId(java.lang.String)
//  .targets(java.util.List<java.lang.String>)
//  .targetType(java.lang.String)
//  .timeouts(BudgetBudgetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.amount">amount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#amount BudgetBudget#amount}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#compartment_id BudgetBudget#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.resetPeriod">resetPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#reset_period BudgetBudget#reset_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.budgetProcessingPeriodStartOffset">budgetProcessingPeriodStartOffset</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#budget_processing_period_start_offset BudgetBudget#budget_processing_period_start_offset}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#defined_tags BudgetBudget#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#description BudgetBudget#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#display_name BudgetBudget#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.endDate">endDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#end_date BudgetBudget#end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#freeform_tags BudgetBudget#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#id BudgetBudget#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.processingPeriodType">processingPeriodType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#processing_period_type BudgetBudget#processing_period_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.startDate">startDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#start_date BudgetBudget#start_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.targetCompartmentId">targetCompartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_compartment_id BudgetBudget#target_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#targets BudgetBudget#targets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.targetType">targetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_type BudgetBudget#target_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `amount`<sup>Required</sup> <a name="amount" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.amount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#amount BudgetBudget#amount}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#compartment_id BudgetBudget#compartment_id}.

---

##### `resetPeriod`<sup>Required</sup> <a name="resetPeriod" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.resetPeriod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#reset_period BudgetBudget#reset_period}.

---

##### `budgetProcessingPeriodStartOffset`<sup>Optional</sup> <a name="budgetProcessingPeriodStartOffset" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.budgetProcessingPeriodStartOffset"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#budget_processing_period_start_offset BudgetBudget#budget_processing_period_start_offset}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#defined_tags BudgetBudget#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#description BudgetBudget#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#display_name BudgetBudget#display_name}.

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.endDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#end_date BudgetBudget#end_date}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#freeform_tags BudgetBudget#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#id BudgetBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `processingPeriodType`<sup>Optional</sup> <a name="processingPeriodType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.processingPeriodType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#processing_period_type BudgetBudget#processing_period_type}.

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.startDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#start_date BudgetBudget#start_date}.

---

##### `targetCompartmentId`<sup>Optional</sup> <a name="targetCompartmentId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.targetCompartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_compartment_id BudgetBudget#target_compartment_id}.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.targets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#targets BudgetBudget#targets}.

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.targetType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_type BudgetBudget#target_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#timeouts BudgetBudget#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetBudgetProcessingPeriodStartOffset">resetBudgetProcessingPeriodStartOffset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetProcessingPeriodType">resetProcessingPeriodType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetStartDate">resetStartDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargetCompartmentId">resetTargetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargets">resetTargets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargetType">resetTargetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.putTimeouts"></a>

```java
public void putTimeouts(BudgetBudgetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a>

---

##### `resetBudgetProcessingPeriodStartOffset` <a name="resetBudgetProcessingPeriodStartOffset" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetBudgetProcessingPeriodStartOffset"></a>

```java
public void resetBudgetProcessingPeriodStartOffset()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEndDate` <a name="resetEndDate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetEndDate"></a>

```java
public void resetEndDate()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetId"></a>

```java
public void resetId()
```

##### `resetProcessingPeriodType` <a name="resetProcessingPeriodType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetProcessingPeriodType"></a>

```java
public void resetProcessingPeriodType()
```

##### `resetStartDate` <a name="resetStartDate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetStartDate"></a>

```java
public void resetStartDate()
```

##### `resetTargetCompartmentId` <a name="resetTargetCompartmentId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargetCompartmentId"></a>

```java
public void resetTargetCompartmentId()
```

##### `resetTargets` <a name="resetTargets" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargets"></a>

```java
public void resetTargets()
```

##### `resetTargetType` <a name="resetTargetType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargetType"></a>

```java
public void resetTargetType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BudgetBudget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.budget_budget.BudgetBudget;

BudgetBudget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.budget_budget.BudgetBudget;

BudgetBudget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.budget_budget.BudgetBudget;

BudgetBudget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.budget_budget.BudgetBudget;

BudgetBudget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BudgetBudget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BudgetBudget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BudgetBudget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BudgetBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BudgetBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.actualSpend">actualSpend</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.alertRuleCount">alertRuleCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.forecastedSpend">forecastedSpend</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference">BudgetBudgetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeSpendComputed">timeSpendComputed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.amountInput">amountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.budgetProcessingPeriodStartOffsetInput">budgetProcessingPeriodStartOffsetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.endDateInput">endDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.processingPeriodTypeInput">processingPeriodTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.resetPeriodInput">resetPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.startDateInput">startDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetCompartmentIdInput">targetCompartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetsInput">targetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetTypeInput">targetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.amount">amount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.budgetProcessingPeriodStartOffset">budgetProcessingPeriodStartOffset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.endDate">endDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.processingPeriodType">processingPeriodType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.resetPeriod">resetPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.startDate">startDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetCompartmentId">targetCompartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actualSpend`<sup>Required</sup> <a name="actualSpend" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.actualSpend"></a>

```java
public java.lang.Number getActualSpend();
```

- *Type:* java.lang.Number

---

##### `alertRuleCount`<sup>Required</sup> <a name="alertRuleCount" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.alertRuleCount"></a>

```java
public java.lang.Number getAlertRuleCount();
```

- *Type:* java.lang.Number

---

##### `forecastedSpend`<sup>Required</sup> <a name="forecastedSpend" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.forecastedSpend"></a>

```java
public java.lang.Number getForecastedSpend();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeouts"></a>

```java
public BudgetBudgetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference">BudgetBudgetTimeoutsOutputReference</a>

---

##### `timeSpendComputed`<sup>Required</sup> <a name="timeSpendComputed" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeSpendComputed"></a>

```java
public java.lang.String getTimeSpendComputed();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.amountInput"></a>

```java
public java.lang.Number getAmountInput();
```

- *Type:* java.lang.Number

---

##### `budgetProcessingPeriodStartOffsetInput`<sup>Optional</sup> <a name="budgetProcessingPeriodStartOffsetInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.budgetProcessingPeriodStartOffsetInput"></a>

```java
public java.lang.Number getBudgetProcessingPeriodStartOffsetInput();
```

- *Type:* java.lang.Number

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.endDateInput"></a>

```java
public java.lang.String getEndDateInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `processingPeriodTypeInput`<sup>Optional</sup> <a name="processingPeriodTypeInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.processingPeriodTypeInput"></a>

```java
public java.lang.String getProcessingPeriodTypeInput();
```

- *Type:* java.lang.String

---

##### `resetPeriodInput`<sup>Optional</sup> <a name="resetPeriodInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.resetPeriodInput"></a>

```java
public java.lang.String getResetPeriodInput();
```

- *Type:* java.lang.String

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.startDateInput"></a>

```java
public java.lang.String getStartDateInput();
```

- *Type:* java.lang.String

---

##### `targetCompartmentIdInput`<sup>Optional</sup> <a name="targetCompartmentIdInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetCompartmentIdInput"></a>

```java
public java.lang.String getTargetCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetsInput"></a>

```java
public java.util.List<java.lang.String> getTargetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetTypeInput"></a>

```java
public java.lang.String getTargetTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a>

---

##### `amount`<sup>Required</sup> <a name="amount" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.amount"></a>

```java
public java.lang.Number getAmount();
```

- *Type:* java.lang.Number

---

##### `budgetProcessingPeriodStartOffset`<sup>Required</sup> <a name="budgetProcessingPeriodStartOffset" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.budgetProcessingPeriodStartOffset"></a>

```java
public java.lang.Number getBudgetProcessingPeriodStartOffset();
```

- *Type:* java.lang.Number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `processingPeriodType`<sup>Required</sup> <a name="processingPeriodType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.processingPeriodType"></a>

```java
public java.lang.String getProcessingPeriodType();
```

- *Type:* java.lang.String

---

##### `resetPeriod`<sup>Required</sup> <a name="resetPeriod" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.resetPeriod"></a>

```java
public java.lang.String getResetPeriod();
```

- *Type:* java.lang.String

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

---

##### `targetCompartmentId`<sup>Required</sup> <a name="targetCompartmentId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetCompartmentId"></a>

```java
public java.lang.String getTargetCompartmentId();
```

- *Type:* java.lang.String

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targets"></a>

```java
public java.util.List<java.lang.String> getTargets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetBudgetConfig <a name="BudgetBudgetConfig" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.budget_budget.BudgetBudgetConfig;

BudgetBudgetConfig.builder()
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
    .amount(java.lang.Number)
    .compartmentId(java.lang.String)
    .resetPeriod(java.lang.String)
//  .budgetProcessingPeriodStartOffset(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .endDate(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .processingPeriodType(java.lang.String)
//  .startDate(java.lang.String)
//  .targetCompartmentId(java.lang.String)
//  .targets(java.util.List<java.lang.String>)
//  .targetType(java.lang.String)
//  .timeouts(BudgetBudgetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.amount">amount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#amount BudgetBudget#amount}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#compartment_id BudgetBudget#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.resetPeriod">resetPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#reset_period BudgetBudget#reset_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.budgetProcessingPeriodStartOffset">budgetProcessingPeriodStartOffset</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#budget_processing_period_start_offset BudgetBudget#budget_processing_period_start_offset}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#defined_tags BudgetBudget#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#description BudgetBudget#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#display_name BudgetBudget#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.endDate">endDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#end_date BudgetBudget#end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#freeform_tags BudgetBudget#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#id BudgetBudget#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.processingPeriodType">processingPeriodType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#processing_period_type BudgetBudget#processing_period_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.startDate">startDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#start_date BudgetBudget#start_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targetCompartmentId">targetCompartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_compartment_id BudgetBudget#target_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#targets BudgetBudget#targets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targetType">targetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_type BudgetBudget#target_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `amount`<sup>Required</sup> <a name="amount" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.amount"></a>

```java
public java.lang.Number getAmount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#amount BudgetBudget#amount}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#compartment_id BudgetBudget#compartment_id}.

---

##### `resetPeriod`<sup>Required</sup> <a name="resetPeriod" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.resetPeriod"></a>

```java
public java.lang.String getResetPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#reset_period BudgetBudget#reset_period}.

---

##### `budgetProcessingPeriodStartOffset`<sup>Optional</sup> <a name="budgetProcessingPeriodStartOffset" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.budgetProcessingPeriodStartOffset"></a>

```java
public java.lang.Number getBudgetProcessingPeriodStartOffset();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#budget_processing_period_start_offset BudgetBudget#budget_processing_period_start_offset}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#defined_tags BudgetBudget#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#description BudgetBudget#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#display_name BudgetBudget#display_name}.

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#end_date BudgetBudget#end_date}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#freeform_tags BudgetBudget#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#id BudgetBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `processingPeriodType`<sup>Optional</sup> <a name="processingPeriodType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.processingPeriodType"></a>

```java
public java.lang.String getProcessingPeriodType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#processing_period_type BudgetBudget#processing_period_type}.

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#start_date BudgetBudget#start_date}.

---

##### `targetCompartmentId`<sup>Optional</sup> <a name="targetCompartmentId" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targetCompartmentId"></a>

```java
public java.lang.String getTargetCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_compartment_id BudgetBudget#target_compartment_id}.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targets"></a>

```java
public java.util.List<java.lang.String> getTargets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#targets BudgetBudget#targets}.

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_type BudgetBudget#target_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.timeouts"></a>

```java
public BudgetBudgetTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#timeouts BudgetBudget#timeouts}

---

### BudgetBudgetTimeouts <a name="BudgetBudgetTimeouts" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.budget_budget.BudgetBudgetTimeouts;

BudgetBudgetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#create BudgetBudget#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#delete BudgetBudget#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#update BudgetBudget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#create BudgetBudget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#delete BudgetBudget#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#update BudgetBudget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetBudgetTimeoutsOutputReference <a name="BudgetBudgetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.budget_budget.BudgetBudgetTimeoutsOutputReference;

new BudgetBudgetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a>

---



