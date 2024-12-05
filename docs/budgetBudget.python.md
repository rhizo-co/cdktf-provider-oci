# `budgetBudget` Submodule <a name="`budgetBudget` Submodule" id="rhizo-co-terraform-provider-oci.budgetBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BudgetBudget <a name="BudgetBudget" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget oci_budget_budget}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import budget_budget

budgetBudget.BudgetBudget(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  amount: typing.Union[int, float],
  compartment_id: str,
  reset_period: str,
  budget_processing_period_start_offset: typing.Union[int, float] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  end_date: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  processing_period_type: str = None,
  start_date: str = None,
  target_compartment_id: str = None,
  targets: typing.List[str] = None,
  target_type: str = None,
  timeouts: BudgetBudgetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.amount">amount</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#amount BudgetBudget#amount}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#compartment_id BudgetBudget#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.resetPeriod">reset_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#reset_period BudgetBudget#reset_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.budgetProcessingPeriodStartOffset">budget_processing_period_start_offset</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#budget_processing_period_start_offset BudgetBudget#budget_processing_period_start_offset}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#defined_tags BudgetBudget#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#description BudgetBudget#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#display_name BudgetBudget#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.endDate">end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#end_date BudgetBudget#end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#freeform_tags BudgetBudget#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#id BudgetBudget#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.processingPeriodType">processing_period_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#processing_period_type BudgetBudget#processing_period_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.startDate">start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#start_date BudgetBudget#start_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.targetCompartmentId">target_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_compartment_id BudgetBudget#target_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.targets">targets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#targets BudgetBudget#targets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.targetType">target_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_type BudgetBudget#target_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `amount`<sup>Required</sup> <a name="amount" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.amount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#amount BudgetBudget#amount}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#compartment_id BudgetBudget#compartment_id}.

---

##### `reset_period`<sup>Required</sup> <a name="reset_period" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.resetPeriod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#reset_period BudgetBudget#reset_period}.

---

##### `budget_processing_period_start_offset`<sup>Optional</sup> <a name="budget_processing_period_start_offset" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.budgetProcessingPeriodStartOffset"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#budget_processing_period_start_offset BudgetBudget#budget_processing_period_start_offset}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#defined_tags BudgetBudget#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#description BudgetBudget#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#display_name BudgetBudget#display_name}.

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.endDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#end_date BudgetBudget#end_date}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#freeform_tags BudgetBudget#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#id BudgetBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `processing_period_type`<sup>Optional</sup> <a name="processing_period_type" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.processingPeriodType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#processing_period_type BudgetBudget#processing_period_type}.

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.startDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#start_date BudgetBudget#start_date}.

---

##### `target_compartment_id`<sup>Optional</sup> <a name="target_compartment_id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.targetCompartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_compartment_id BudgetBudget#target_compartment_id}.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.targets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#targets BudgetBudget#targets}.

---

##### `target_type`<sup>Optional</sup> <a name="target_type" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.Initializer.parameter.targetType"></a>

- *Type:* str

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
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetBudgetProcessingPeriodStartOffset">reset_budget_processing_period_start_offset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetEndDate">reset_end_date</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetProcessingPeriodType">reset_processing_period_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetStartDate">reset_start_date</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargetCompartmentId">reset_target_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargets">reset_targets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargetType">reset_target_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#create BudgetBudget#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#delete BudgetBudget#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#update BudgetBudget#update}.

---

##### `reset_budget_processing_period_start_offset` <a name="reset_budget_processing_period_start_offset" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetBudgetProcessingPeriodStartOffset"></a>

```python
def reset_budget_processing_period_start_offset() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_end_date` <a name="reset_end_date" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetEndDate"></a>

```python
def reset_end_date() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_processing_period_type` <a name="reset_processing_period_type" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetProcessingPeriodType"></a>

```python
def reset_processing_period_type() -> None
```

##### `reset_start_date` <a name="reset_start_date" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetStartDate"></a>

```python
def reset_start_date() -> None
```

##### `reset_target_compartment_id` <a name="reset_target_compartment_id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargetCompartmentId"></a>

```python
def reset_target_compartment_id() -> None
```

##### `reset_targets` <a name="reset_targets" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargets"></a>

```python
def reset_targets() -> None
```

##### `reset_target_type` <a name="reset_target_type" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTargetType"></a>

```python
def reset_target_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BudgetBudget resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import budget_budget

budgetBudget.BudgetBudget.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import budget_budget

budgetBudget.BudgetBudget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import budget_budget

budgetBudget.BudgetBudget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import budget_budget

budgetBudget.BudgetBudget.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BudgetBudget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BudgetBudget to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BudgetBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BudgetBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.actualSpend">actual_spend</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.alertRuleCount">alert_rule_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.forecastedSpend">forecasted_spend</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference">BudgetBudgetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeSpendComputed">time_spend_computed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.amountInput">amount_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.budgetProcessingPeriodStartOffsetInput">budget_processing_period_start_offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.processingPeriodTypeInput">processing_period_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.resetPeriodInput">reset_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.startDateInput">start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetCompartmentIdInput">target_compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetsInput">targets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetTypeInput">target_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.budgetProcessingPeriodStartOffset">budget_processing_period_start_offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.processingPeriodType">processing_period_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.resetPeriod">reset_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetCompartmentId">target_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targets">targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actual_spend`<sup>Required</sup> <a name="actual_spend" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.actualSpend"></a>

```python
actual_spend: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alert_rule_count`<sup>Required</sup> <a name="alert_rule_count" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.alertRuleCount"></a>

```python
alert_rule_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `forecasted_spend`<sup>Required</sup> <a name="forecasted_spend" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.forecastedSpend"></a>

```python
forecasted_spend: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeouts"></a>

```python
timeouts: BudgetBudgetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference">BudgetBudgetTimeoutsOutputReference</a>

---

##### `time_spend_computed`<sup>Required</sup> <a name="time_spend_computed" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeSpendComputed"></a>

```python
time_spend_computed: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `amount_input`<sup>Optional</sup> <a name="amount_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.amountInput"></a>

```python
amount_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `budget_processing_period_start_offset_input`<sup>Optional</sup> <a name="budget_processing_period_start_offset_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.budgetProcessingPeriodStartOffsetInput"></a>

```python
budget_processing_period_start_offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `processing_period_type_input`<sup>Optional</sup> <a name="processing_period_type_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.processingPeriodTypeInput"></a>

```python
processing_period_type_input: str
```

- *Type:* str

---

##### `reset_period_input`<sup>Optional</sup> <a name="reset_period_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.resetPeriodInput"></a>

```python
reset_period_input: str
```

- *Type:* str

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.startDateInput"></a>

```python
start_date_input: str
```

- *Type:* str

---

##### `target_compartment_id_input`<sup>Optional</sup> <a name="target_compartment_id_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetCompartmentIdInput"></a>

```python
target_compartment_id_input: str
```

- *Type:* str

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetsInput"></a>

```python
targets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_type_input`<sup>Optional</sup> <a name="target_type_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetTypeInput"></a>

```python
target_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BudgetBudgetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a>]

---

##### `amount`<sup>Required</sup> <a name="amount" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `budget_processing_period_start_offset`<sup>Required</sup> <a name="budget_processing_period_start_offset" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.budgetProcessingPeriodStartOffset"></a>

```python
budget_processing_period_start_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `processing_period_type`<sup>Required</sup> <a name="processing_period_type" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.processingPeriodType"></a>

```python
processing_period_type: str
```

- *Type:* str

---

##### `reset_period`<sup>Required</sup> <a name="reset_period" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.resetPeriod"></a>

```python
reset_period: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `target_compartment_id`<sup>Required</sup> <a name="target_compartment_id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetCompartmentId"></a>

```python
target_compartment_id: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetBudgetConfig <a name="BudgetBudgetConfig" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import budget_budget

budgetBudget.BudgetBudgetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  amount: typing.Union[int, float],
  compartment_id: str,
  reset_period: str,
  budget_processing_period_start_offset: typing.Union[int, float] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  end_date: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  processing_period_type: str = None,
  start_date: str = None,
  target_compartment_id: str = None,
  targets: typing.List[str] = None,
  target_type: str = None,
  timeouts: BudgetBudgetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#amount BudgetBudget#amount}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#compartment_id BudgetBudget#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.resetPeriod">reset_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#reset_period BudgetBudget#reset_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.budgetProcessingPeriodStartOffset">budget_processing_period_start_offset</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#budget_processing_period_start_offset BudgetBudget#budget_processing_period_start_offset}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#defined_tags BudgetBudget#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#description BudgetBudget#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#display_name BudgetBudget#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.endDate">end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#end_date BudgetBudget#end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#freeform_tags BudgetBudget#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#id BudgetBudget#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.processingPeriodType">processing_period_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#processing_period_type BudgetBudget#processing_period_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.startDate">start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#start_date BudgetBudget#start_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targetCompartmentId">target_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_compartment_id BudgetBudget#target_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targets">targets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#targets BudgetBudget#targets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targetType">target_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_type BudgetBudget#target_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `amount`<sup>Required</sup> <a name="amount" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#amount BudgetBudget#amount}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#compartment_id BudgetBudget#compartment_id}.

---

##### `reset_period`<sup>Required</sup> <a name="reset_period" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.resetPeriod"></a>

```python
reset_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#reset_period BudgetBudget#reset_period}.

---

##### `budget_processing_period_start_offset`<sup>Optional</sup> <a name="budget_processing_period_start_offset" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.budgetProcessingPeriodStartOffset"></a>

```python
budget_processing_period_start_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#budget_processing_period_start_offset BudgetBudget#budget_processing_period_start_offset}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#defined_tags BudgetBudget#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#description BudgetBudget#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#display_name BudgetBudget#display_name}.

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#end_date BudgetBudget#end_date}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#freeform_tags BudgetBudget#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#id BudgetBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `processing_period_type`<sup>Optional</sup> <a name="processing_period_type" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.processingPeriodType"></a>

```python
processing_period_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#processing_period_type BudgetBudget#processing_period_type}.

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#start_date BudgetBudget#start_date}.

---

##### `target_compartment_id`<sup>Optional</sup> <a name="target_compartment_id" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targetCompartmentId"></a>

```python
target_compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_compartment_id BudgetBudget#target_compartment_id}.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#targets BudgetBudget#targets}.

---

##### `target_type`<sup>Optional</sup> <a name="target_type" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#target_type BudgetBudget#target_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetConfig.property.timeouts"></a>

```python
timeouts: BudgetBudgetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#timeouts BudgetBudget#timeouts}

---

### BudgetBudgetTimeouts <a name="BudgetBudgetTimeouts" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import budget_budget

budgetBudget.BudgetBudgetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#create BudgetBudget#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#delete BudgetBudget#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#update BudgetBudget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#create BudgetBudget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#delete BudgetBudget#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/budget_budget#update BudgetBudget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetBudgetTimeoutsOutputReference <a name="BudgetBudgetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import budget_budget

budgetBudget.BudgetBudgetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BudgetBudgetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.budgetBudget.BudgetBudgetTimeouts">BudgetBudgetTimeouts</a>]

---



