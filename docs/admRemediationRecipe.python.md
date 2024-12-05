# `admRemediationRecipe` Submodule <a name="`admRemediationRecipe` Submodule" id="rhizo-co-terraform-provider-oci.admRemediationRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdmRemediationRecipe <a name="AdmRemediationRecipe" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe oci_adm_remediation_recipe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import adm_remediation_recipe

admRemediationRecipe.AdmRemediationRecipe(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  detect_configuration: AdmRemediationRecipeDetectConfiguration,
  is_run_triggered_on_kb_change: typing.Union[bool, IResolvable],
  knowledge_base_id: str,
  network_configuration: AdmRemediationRecipeNetworkConfiguration,
  scm_configuration: AdmRemediationRecipeScmConfiguration,
  verify_configuration: AdmRemediationRecipeVerifyConfiguration,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  state: str = None,
  timeouts: AdmRemediationRecipeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#compartment_id AdmRemediationRecipe#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.detectConfiguration">detect_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a></code> | detect_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.isRunTriggeredOnKbChange">is_run_triggered_on_kb_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_run_triggered_on_kb_change AdmRemediationRecipe#is_run_triggered_on_kb_change}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#knowledge_base_id AdmRemediationRecipe#knowledge_base_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.scmConfiguration">scm_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a></code> | scm_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.verifyConfiguration">verify_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a></code> | verify_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#defined_tags AdmRemediationRecipe#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#display_name AdmRemediationRecipe#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#freeform_tags AdmRemediationRecipe#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#id AdmRemediationRecipe#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#state AdmRemediationRecipe#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#compartment_id AdmRemediationRecipe#compartment_id}.

---

##### `detect_configuration`<sup>Required</sup> <a name="detect_configuration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.detectConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

detect_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#detect_configuration AdmRemediationRecipe#detect_configuration}

---

##### `is_run_triggered_on_kb_change`<sup>Required</sup> <a name="is_run_triggered_on_kb_change" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.isRunTriggeredOnKbChange"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_run_triggered_on_kb_change AdmRemediationRecipe#is_run_triggered_on_kb_change}.

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.knowledgeBaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#knowledge_base_id AdmRemediationRecipe#knowledge_base_id}.

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#network_configuration AdmRemediationRecipe#network_configuration}

---

##### `scm_configuration`<sup>Required</sup> <a name="scm_configuration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.scmConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

scm_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_configuration AdmRemediationRecipe#scm_configuration}

---

##### `verify_configuration`<sup>Required</sup> <a name="verify_configuration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.verifyConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

verify_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#verify_configuration AdmRemediationRecipe#verify_configuration}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#defined_tags AdmRemediationRecipe#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#display_name AdmRemediationRecipe#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#freeform_tags AdmRemediationRecipe#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#id AdmRemediationRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#state AdmRemediationRecipe#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#timeouts AdmRemediationRecipe#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration">put_detect_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration">put_scm_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration">put_verify_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_detect_configuration` <a name="put_detect_configuration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration"></a>

```python
def put_detect_configuration(
  exclusions: typing.List[str] = None,
  max_permissible_cvss_v2_score: typing.Union[int, float] = None,
  max_permissible_cvss_v3_score: typing.Union[int, float] = None,
  max_permissible_severity: str = None,
  upgrade_policy: str = None
) -> None
```

###### `exclusions`<sup>Optional</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration.parameter.exclusions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#exclusions AdmRemediationRecipe#exclusions}.

---

###### `max_permissible_cvss_v2_score`<sup>Optional</sup> <a name="max_permissible_cvss_v2_score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration.parameter.maxPermissibleCvssV2Score"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v2score AdmRemediationRecipe#max_permissible_cvss_v2score}.

---

###### `max_permissible_cvss_v3_score`<sup>Optional</sup> <a name="max_permissible_cvss_v3_score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration.parameter.maxPermissibleCvssV3Score"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v3score AdmRemediationRecipe#max_permissible_cvss_v3score}.

---

###### `max_permissible_severity`<sup>Optional</sup> <a name="max_permissible_severity" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration.parameter.maxPermissibleSeverity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_severity AdmRemediationRecipe#max_permissible_severity}.

---

###### `upgrade_policy`<sup>Optional</sup> <a name="upgrade_policy" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration.parameter.upgradePolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#upgrade_policy AdmRemediationRecipe#upgrade_policy}.

---

##### `put_network_configuration` <a name="put_network_configuration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  subnet_id: str,
  nsg_ids: typing.List[str] = None
) -> None
```

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putNetworkConfiguration.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#subnet_id AdmRemediationRecipe#subnet_id}.

---

###### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putNetworkConfiguration.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#nsg_ids AdmRemediationRecipe#nsg_ids}.

---

##### `put_scm_configuration` <a name="put_scm_configuration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration"></a>

```python
def put_scm_configuration(
  branch: str,
  is_automerge_enabled: typing.Union[bool, IResolvable],
  scm_type: str,
  build_file_location: str = None,
  external_scm_type: str = None,
  oci_code_repository_id: str = None,
  pat_secret_id: str = None,
  repository_url: str = None,
  username: str = None
) -> None
```

###### `branch`<sup>Required</sup> <a name="branch" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration.parameter.branch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#branch AdmRemediationRecipe#branch}.

---

###### `is_automerge_enabled`<sup>Required</sup> <a name="is_automerge_enabled" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration.parameter.isAutomergeEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_automerge_enabled AdmRemediationRecipe#is_automerge_enabled}.

---

###### `scm_type`<sup>Required</sup> <a name="scm_type" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration.parameter.scmType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_type AdmRemediationRecipe#scm_type}.

---

###### `build_file_location`<sup>Optional</sup> <a name="build_file_location" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration.parameter.buildFileLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_file_location AdmRemediationRecipe#build_file_location}.

---

###### `external_scm_type`<sup>Optional</sup> <a name="external_scm_type" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration.parameter.externalScmType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#external_scm_type AdmRemediationRecipe#external_scm_type}.

---

###### `oci_code_repository_id`<sup>Optional</sup> <a name="oci_code_repository_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration.parameter.ociCodeRepositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#oci_code_repository_id AdmRemediationRecipe#oci_code_repository_id}.

---

###### `pat_secret_id`<sup>Optional</sup> <a name="pat_secret_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration.parameter.patSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}.

---

###### `repository_url`<sup>Optional</sup> <a name="repository_url" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration.parameter.repositoryUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}.

---

###### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#create AdmRemediationRecipe#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#delete AdmRemediationRecipe#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#update AdmRemediationRecipe#update}.

---

##### `put_verify_configuration` <a name="put_verify_configuration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration"></a>

```python
def put_verify_configuration(
  build_service_type: str,
  additional_parameters: typing.Mapping[str] = None,
  jenkins_url: str = None,
  job_name: str = None,
  pat_secret_id: str = None,
  pipeline_id: str = None,
  repository_url: str = None,
  trigger_secret_id: str = None,
  username: str = None,
  workflow_name: str = None
) -> None
```

###### `build_service_type`<sup>Required</sup> <a name="build_service_type" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration.parameter.buildServiceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_service_type AdmRemediationRecipe#build_service_type}.

---

###### `additional_parameters`<sup>Optional</sup> <a name="additional_parameters" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration.parameter.additionalParameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#additional_parameters AdmRemediationRecipe#additional_parameters}.

---

###### `jenkins_url`<sup>Optional</sup> <a name="jenkins_url" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration.parameter.jenkinsUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#jenkins_url AdmRemediationRecipe#jenkins_url}.

---

###### `job_name`<sup>Optional</sup> <a name="job_name" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration.parameter.jobName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#job_name AdmRemediationRecipe#job_name}.

---

###### `pat_secret_id`<sup>Optional</sup> <a name="pat_secret_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration.parameter.patSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}.

---

###### `pipeline_id`<sup>Optional</sup> <a name="pipeline_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration.parameter.pipelineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pipeline_id AdmRemediationRecipe#pipeline_id}.

---

###### `repository_url`<sup>Optional</sup> <a name="repository_url" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration.parameter.repositoryUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}.

---

###### `trigger_secret_id`<sup>Optional</sup> <a name="trigger_secret_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration.parameter.triggerSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#trigger_secret_id AdmRemediationRecipe#trigger_secret_id}.

---

###### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}.

---

###### `workflow_name`<sup>Optional</sup> <a name="workflow_name" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration.parameter.workflowName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#workflow_name AdmRemediationRecipe#workflow_name}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AdmRemediationRecipe resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import adm_remediation_recipe

admRemediationRecipe.AdmRemediationRecipe.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import adm_remediation_recipe

admRemediationRecipe.AdmRemediationRecipe.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import adm_remediation_recipe

admRemediationRecipe.AdmRemediationRecipe.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import adm_remediation_recipe

admRemediationRecipe.AdmRemediationRecipe.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AdmRemediationRecipe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AdmRemediationRecipe to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AdmRemediationRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AdmRemediationRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfiguration">detect_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference">AdmRemediationRecipeDetectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference">AdmRemediationRecipeNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfiguration">scm_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference">AdmRemediationRecipeScmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference">AdmRemediationRecipeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfiguration">verify_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference">AdmRemediationRecipeVerifyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfigurationInput">detect_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChangeInput">is_run_triggered_on_kb_change_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseIdInput">knowledge_base_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfigurationInput">network_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfigurationInput">scm_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfigurationInput">verify_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChange">is_run_triggered_on_kb_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `detect_configuration`<sup>Required</sup> <a name="detect_configuration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfiguration"></a>

```python
detect_configuration: AdmRemediationRecipeDetectConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference">AdmRemediationRecipeDetectConfigurationOutputReference</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfiguration"></a>

```python
network_configuration: AdmRemediationRecipeNetworkConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference">AdmRemediationRecipeNetworkConfigurationOutputReference</a>

---

##### `scm_configuration`<sup>Required</sup> <a name="scm_configuration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfiguration"></a>

```python
scm_configuration: AdmRemediationRecipeScmConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference">AdmRemediationRecipeScmConfigurationOutputReference</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeouts"></a>

```python
timeouts: AdmRemediationRecipeTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference">AdmRemediationRecipeTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `verify_configuration`<sup>Required</sup> <a name="verify_configuration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfiguration"></a>

```python
verify_configuration: AdmRemediationRecipeVerifyConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference">AdmRemediationRecipeVerifyConfigurationOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `detect_configuration_input`<sup>Optional</sup> <a name="detect_configuration_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfigurationInput"></a>

```python
detect_configuration_input: AdmRemediationRecipeDetectConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_run_triggered_on_kb_change_input`<sup>Optional</sup> <a name="is_run_triggered_on_kb_change_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChangeInput"></a>

```python
is_run_triggered_on_kb_change_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `knowledge_base_id_input`<sup>Optional</sup> <a name="knowledge_base_id_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseIdInput"></a>

```python
knowledge_base_id_input: str
```

- *Type:* str

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfigurationInput"></a>

```python
network_configuration_input: AdmRemediationRecipeNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

---

##### `scm_configuration_input`<sup>Optional</sup> <a name="scm_configuration_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfigurationInput"></a>

```python
scm_configuration_input: AdmRemediationRecipeScmConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AdmRemediationRecipeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>]

---

##### `verify_configuration_input`<sup>Optional</sup> <a name="verify_configuration_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfigurationInput"></a>

```python
verify_configuration_input: AdmRemediationRecipeVerifyConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_run_triggered_on_kb_change`<sup>Required</sup> <a name="is_run_triggered_on_kb_change" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChange"></a>

```python
is_run_triggered_on_kb_change: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AdmRemediationRecipeConfig <a name="AdmRemediationRecipeConfig" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import adm_remediation_recipe

admRemediationRecipe.AdmRemediationRecipeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  detect_configuration: AdmRemediationRecipeDetectConfiguration,
  is_run_triggered_on_kb_change: typing.Union[bool, IResolvable],
  knowledge_base_id: str,
  network_configuration: AdmRemediationRecipeNetworkConfiguration,
  scm_configuration: AdmRemediationRecipeScmConfiguration,
  verify_configuration: AdmRemediationRecipeVerifyConfiguration,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  state: str = None,
  timeouts: AdmRemediationRecipeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#compartment_id AdmRemediationRecipe#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.detectConfiguration">detect_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a></code> | detect_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.isRunTriggeredOnKbChange">is_run_triggered_on_kb_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_run_triggered_on_kb_change AdmRemediationRecipe#is_run_triggered_on_kb_change}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#knowledge_base_id AdmRemediationRecipe#knowledge_base_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.scmConfiguration">scm_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a></code> | scm_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.verifyConfiguration">verify_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a></code> | verify_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#defined_tags AdmRemediationRecipe#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#display_name AdmRemediationRecipe#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#freeform_tags AdmRemediationRecipe#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#id AdmRemediationRecipe#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#state AdmRemediationRecipe#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#compartment_id AdmRemediationRecipe#compartment_id}.

---

##### `detect_configuration`<sup>Required</sup> <a name="detect_configuration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.detectConfiguration"></a>

```python
detect_configuration: AdmRemediationRecipeDetectConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

detect_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#detect_configuration AdmRemediationRecipe#detect_configuration}

---

##### `is_run_triggered_on_kb_change`<sup>Required</sup> <a name="is_run_triggered_on_kb_change" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.isRunTriggeredOnKbChange"></a>

```python
is_run_triggered_on_kb_change: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_run_triggered_on_kb_change AdmRemediationRecipe#is_run_triggered_on_kb_change}.

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#knowledge_base_id AdmRemediationRecipe#knowledge_base_id}.

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.networkConfiguration"></a>

```python
network_configuration: AdmRemediationRecipeNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#network_configuration AdmRemediationRecipe#network_configuration}

---

##### `scm_configuration`<sup>Required</sup> <a name="scm_configuration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.scmConfiguration"></a>

```python
scm_configuration: AdmRemediationRecipeScmConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

scm_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_configuration AdmRemediationRecipe#scm_configuration}

---

##### `verify_configuration`<sup>Required</sup> <a name="verify_configuration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.verifyConfiguration"></a>

```python
verify_configuration: AdmRemediationRecipeVerifyConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

verify_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#verify_configuration AdmRemediationRecipe#verify_configuration}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#defined_tags AdmRemediationRecipe#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#display_name AdmRemediationRecipe#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#freeform_tags AdmRemediationRecipe#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#id AdmRemediationRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#state AdmRemediationRecipe#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.timeouts"></a>

```python
timeouts: AdmRemediationRecipeTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#timeouts AdmRemediationRecipe#timeouts}

---

### AdmRemediationRecipeDetectConfiguration <a name="AdmRemediationRecipeDetectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import adm_remediation_recipe

admRemediationRecipe.AdmRemediationRecipeDetectConfiguration(
  exclusions: typing.List[str] = None,
  max_permissible_cvss_v2_score: typing.Union[int, float] = None,
  max_permissible_cvss_v3_score: typing.Union[int, float] = None,
  max_permissible_severity: str = None,
  upgrade_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#exclusions AdmRemediationRecipe#exclusions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV2Score">max_permissible_cvss_v2_score</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v2score AdmRemediationRecipe#max_permissible_cvss_v2score}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV3Score">max_permissible_cvss_v3_score</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v3score AdmRemediationRecipe#max_permissible_cvss_v3score}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleSeverity">max_permissible_severity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_severity AdmRemediationRecipe#max_permissible_severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.upgradePolicy">upgrade_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#upgrade_policy AdmRemediationRecipe#upgrade_policy}. |

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#exclusions AdmRemediationRecipe#exclusions}.

---

##### `max_permissible_cvss_v2_score`<sup>Optional</sup> <a name="max_permissible_cvss_v2_score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV2Score"></a>

```python
max_permissible_cvss_v2_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v2score AdmRemediationRecipe#max_permissible_cvss_v2score}.

---

##### `max_permissible_cvss_v3_score`<sup>Optional</sup> <a name="max_permissible_cvss_v3_score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV3Score"></a>

```python
max_permissible_cvss_v3_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v3score AdmRemediationRecipe#max_permissible_cvss_v3score}.

---

##### `max_permissible_severity`<sup>Optional</sup> <a name="max_permissible_severity" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleSeverity"></a>

```python
max_permissible_severity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_severity AdmRemediationRecipe#max_permissible_severity}.

---

##### `upgrade_policy`<sup>Optional</sup> <a name="upgrade_policy" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.upgradePolicy"></a>

```python
upgrade_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#upgrade_policy AdmRemediationRecipe#upgrade_policy}.

---

### AdmRemediationRecipeNetworkConfiguration <a name="AdmRemediationRecipeNetworkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import adm_remediation_recipe

admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration(
  subnet_id: str,
  nsg_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#subnet_id AdmRemediationRecipe#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#nsg_ids AdmRemediationRecipe#nsg_ids}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#subnet_id AdmRemediationRecipe#subnet_id}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#nsg_ids AdmRemediationRecipe#nsg_ids}.

---

### AdmRemediationRecipeScmConfiguration <a name="AdmRemediationRecipeScmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import adm_remediation_recipe

admRemediationRecipe.AdmRemediationRecipeScmConfiguration(
  branch: str,
  is_automerge_enabled: typing.Union[bool, IResolvable],
  scm_type: str,
  build_file_location: str = None,
  external_scm_type: str = None,
  oci_code_repository_id: str = None,
  pat_secret_id: str = None,
  repository_url: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.branch">branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#branch AdmRemediationRecipe#branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.isAutomergeEnabled">is_automerge_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_automerge_enabled AdmRemediationRecipe#is_automerge_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.scmType">scm_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_type AdmRemediationRecipe#scm_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.buildFileLocation">build_file_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_file_location AdmRemediationRecipe#build_file_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.externalScmType">external_scm_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#external_scm_type AdmRemediationRecipe#external_scm_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.ociCodeRepositoryId">oci_code_repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#oci_code_repository_id AdmRemediationRecipe#oci_code_repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.patSecretId">pat_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.repositoryUrl">repository_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}. |

---

##### `branch`<sup>Required</sup> <a name="branch" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.branch"></a>

```python
branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#branch AdmRemediationRecipe#branch}.

---

##### `is_automerge_enabled`<sup>Required</sup> <a name="is_automerge_enabled" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.isAutomergeEnabled"></a>

```python
is_automerge_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_automerge_enabled AdmRemediationRecipe#is_automerge_enabled}.

---

##### `scm_type`<sup>Required</sup> <a name="scm_type" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.scmType"></a>

```python
scm_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_type AdmRemediationRecipe#scm_type}.

---

##### `build_file_location`<sup>Optional</sup> <a name="build_file_location" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.buildFileLocation"></a>

```python
build_file_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_file_location AdmRemediationRecipe#build_file_location}.

---

##### `external_scm_type`<sup>Optional</sup> <a name="external_scm_type" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.externalScmType"></a>

```python
external_scm_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#external_scm_type AdmRemediationRecipe#external_scm_type}.

---

##### `oci_code_repository_id`<sup>Optional</sup> <a name="oci_code_repository_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.ociCodeRepositoryId"></a>

```python
oci_code_repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#oci_code_repository_id AdmRemediationRecipe#oci_code_repository_id}.

---

##### `pat_secret_id`<sup>Optional</sup> <a name="pat_secret_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.patSecretId"></a>

```python
pat_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}.

---

##### `repository_url`<sup>Optional</sup> <a name="repository_url" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}.

---

### AdmRemediationRecipeTimeouts <a name="AdmRemediationRecipeTimeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import adm_remediation_recipe

admRemediationRecipe.AdmRemediationRecipeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#create AdmRemediationRecipe#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#delete AdmRemediationRecipe#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#update AdmRemediationRecipe#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#create AdmRemediationRecipe#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#delete AdmRemediationRecipe#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#update AdmRemediationRecipe#update}.

---

### AdmRemediationRecipeVerifyConfiguration <a name="AdmRemediationRecipeVerifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import adm_remediation_recipe

admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration(
  build_service_type: str,
  additional_parameters: typing.Mapping[str] = None,
  jenkins_url: str = None,
  job_name: str = None,
  pat_secret_id: str = None,
  pipeline_id: str = None,
  repository_url: str = None,
  trigger_secret_id: str = None,
  username: str = None,
  workflow_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.buildServiceType">build_service_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_service_type AdmRemediationRecipe#build_service_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.additionalParameters">additional_parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#additional_parameters AdmRemediationRecipe#additional_parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jenkinsUrl">jenkins_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#jenkins_url AdmRemediationRecipe#jenkins_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jobName">job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#job_name AdmRemediationRecipe#job_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.patSecretId">pat_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.pipelineId">pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pipeline_id AdmRemediationRecipe#pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.repositoryUrl">repository_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.triggerSecretId">trigger_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#trigger_secret_id AdmRemediationRecipe#trigger_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.workflowName">workflow_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#workflow_name AdmRemediationRecipe#workflow_name}. |

---

##### `build_service_type`<sup>Required</sup> <a name="build_service_type" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.buildServiceType"></a>

```python
build_service_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_service_type AdmRemediationRecipe#build_service_type}.

---

##### `additional_parameters`<sup>Optional</sup> <a name="additional_parameters" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.additionalParameters"></a>

```python
additional_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#additional_parameters AdmRemediationRecipe#additional_parameters}.

---

##### `jenkins_url`<sup>Optional</sup> <a name="jenkins_url" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jenkinsUrl"></a>

```python
jenkins_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#jenkins_url AdmRemediationRecipe#jenkins_url}.

---

##### `job_name`<sup>Optional</sup> <a name="job_name" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#job_name AdmRemediationRecipe#job_name}.

---

##### `pat_secret_id`<sup>Optional</sup> <a name="pat_secret_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.patSecretId"></a>

```python
pat_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}.

---

##### `pipeline_id`<sup>Optional</sup> <a name="pipeline_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pipeline_id AdmRemediationRecipe#pipeline_id}.

---

##### `repository_url`<sup>Optional</sup> <a name="repository_url" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}.

---

##### `trigger_secret_id`<sup>Optional</sup> <a name="trigger_secret_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.triggerSecretId"></a>

```python
trigger_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#trigger_secret_id AdmRemediationRecipe#trigger_secret_id}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}.

---

##### `workflow_name`<sup>Optional</sup> <a name="workflow_name" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.workflowName"></a>

```python
workflow_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#workflow_name AdmRemediationRecipe#workflow_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### AdmRemediationRecipeDetectConfigurationOutputReference <a name="AdmRemediationRecipeDetectConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import adm_remediation_recipe

admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetExclusions">reset_exclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV2Score">reset_max_permissible_cvss_v2_score</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV3Score">reset_max_permissible_cvss_v3_score</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleSeverity">reset_max_permissible_severity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetUpgradePolicy">reset_upgrade_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclusions` <a name="reset_exclusions" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetExclusions"></a>

```python
def reset_exclusions() -> None
```

##### `reset_max_permissible_cvss_v2_score` <a name="reset_max_permissible_cvss_v2_score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV2Score"></a>

```python
def reset_max_permissible_cvss_v2_score() -> None
```

##### `reset_max_permissible_cvss_v3_score` <a name="reset_max_permissible_cvss_v3_score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV3Score"></a>

```python
def reset_max_permissible_cvss_v3_score() -> None
```

##### `reset_max_permissible_severity` <a name="reset_max_permissible_severity" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleSeverity"></a>

```python
def reset_max_permissible_severity() -> None
```

##### `reset_upgrade_policy` <a name="reset_upgrade_policy" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetUpgradePolicy"></a>

```python
def reset_upgrade_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusionsInput">exclusions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2ScoreInput">max_permissible_cvss_v2_score_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3ScoreInput">max_permissible_cvss_v3_score_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverityInput">max_permissible_severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicyInput">upgrade_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2Score">max_permissible_cvss_v2_score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3Score">max_permissible_cvss_v3_score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverity">max_permissible_severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicy">upgrade_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusions_input`<sup>Optional</sup> <a name="exclusions_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusionsInput"></a>

```python
exclusions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_permissible_cvss_v2_score_input`<sup>Optional</sup> <a name="max_permissible_cvss_v2_score_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2ScoreInput"></a>

```python
max_permissible_cvss_v2_score_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_permissible_cvss_v3_score_input`<sup>Optional</sup> <a name="max_permissible_cvss_v3_score_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3ScoreInput"></a>

```python
max_permissible_cvss_v3_score_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_permissible_severity_input`<sup>Optional</sup> <a name="max_permissible_severity_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverityInput"></a>

```python
max_permissible_severity_input: str
```

- *Type:* str

---

##### `upgrade_policy_input`<sup>Optional</sup> <a name="upgrade_policy_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicyInput"></a>

```python
upgrade_policy_input: str
```

- *Type:* str

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_permissible_cvss_v2_score`<sup>Required</sup> <a name="max_permissible_cvss_v2_score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2Score"></a>

```python
max_permissible_cvss_v2_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_permissible_cvss_v3_score`<sup>Required</sup> <a name="max_permissible_cvss_v3_score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3Score"></a>

```python
max_permissible_cvss_v3_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_permissible_severity`<sup>Required</sup> <a name="max_permissible_severity" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverity"></a>

```python
max_permissible_severity: str
```

- *Type:* str

---

##### `upgrade_policy`<sup>Required</sup> <a name="upgrade_policy" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicy"></a>

```python
upgrade_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AdmRemediationRecipeDetectConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

---


### AdmRemediationRecipeNetworkConfigurationOutputReference <a name="AdmRemediationRecipeNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import adm_remediation_recipe

admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AdmRemediationRecipeNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

---


### AdmRemediationRecipeScmConfigurationOutputReference <a name="AdmRemediationRecipeScmConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import adm_remediation_recipe

admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetBuildFileLocation">reset_build_file_location</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetExternalScmType">reset_external_scm_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetOciCodeRepositoryId">reset_oci_code_repository_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetPatSecretId">reset_pat_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetRepositoryUrl">reset_repository_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_build_file_location` <a name="reset_build_file_location" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetBuildFileLocation"></a>

```python
def reset_build_file_location() -> None
```

##### `reset_external_scm_type` <a name="reset_external_scm_type" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetExternalScmType"></a>

```python
def reset_external_scm_type() -> None
```

##### `reset_oci_code_repository_id` <a name="reset_oci_code_repository_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetOciCodeRepositoryId"></a>

```python
def reset_oci_code_repository_id() -> None
```

##### `reset_pat_secret_id` <a name="reset_pat_secret_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetPatSecretId"></a>

```python
def reset_pat_secret_id() -> None
```

##### `reset_repository_url` <a name="reset_repository_url" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetRepositoryUrl"></a>

```python
def reset_repository_url() -> None
```

##### `reset_username` <a name="reset_username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocationInput">build_file_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmTypeInput">external_scm_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabledInput">is_automerge_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryIdInput">oci_code_repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretIdInput">pat_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrlInput">repository_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmTypeInput">scm_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocation">build_file_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmType">external_scm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabled">is_automerge_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryId">oci_code_repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretId">pat_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrl">repository_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmType">scm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `build_file_location_input`<sup>Optional</sup> <a name="build_file_location_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocationInput"></a>

```python
build_file_location_input: str
```

- *Type:* str

---

##### `external_scm_type_input`<sup>Optional</sup> <a name="external_scm_type_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmTypeInput"></a>

```python
external_scm_type_input: str
```

- *Type:* str

---

##### `is_automerge_enabled_input`<sup>Optional</sup> <a name="is_automerge_enabled_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabledInput"></a>

```python
is_automerge_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `oci_code_repository_id_input`<sup>Optional</sup> <a name="oci_code_repository_id_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryIdInput"></a>

```python
oci_code_repository_id_input: str
```

- *Type:* str

---

##### `pat_secret_id_input`<sup>Optional</sup> <a name="pat_secret_id_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretIdInput"></a>

```python
pat_secret_id_input: str
```

- *Type:* str

---

##### `repository_url_input`<sup>Optional</sup> <a name="repository_url_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrlInput"></a>

```python
repository_url_input: str
```

- *Type:* str

---

##### `scm_type_input`<sup>Optional</sup> <a name="scm_type_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmTypeInput"></a>

```python
scm_type_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `build_file_location`<sup>Required</sup> <a name="build_file_location" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocation"></a>

```python
build_file_location: str
```

- *Type:* str

---

##### `external_scm_type`<sup>Required</sup> <a name="external_scm_type" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmType"></a>

```python
external_scm_type: str
```

- *Type:* str

---

##### `is_automerge_enabled`<sup>Required</sup> <a name="is_automerge_enabled" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabled"></a>

```python
is_automerge_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `oci_code_repository_id`<sup>Required</sup> <a name="oci_code_repository_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryId"></a>

```python
oci_code_repository_id: str
```

- *Type:* str

---

##### `pat_secret_id`<sup>Required</sup> <a name="pat_secret_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretId"></a>

```python
pat_secret_id: str
```

- *Type:* str

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

---

##### `scm_type`<sup>Required</sup> <a name="scm_type" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmType"></a>

```python
scm_type: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AdmRemediationRecipeScmConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

---


### AdmRemediationRecipeTimeoutsOutputReference <a name="AdmRemediationRecipeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import adm_remediation_recipe

admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AdmRemediationRecipeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>]

---


### AdmRemediationRecipeVerifyConfigurationOutputReference <a name="AdmRemediationRecipeVerifyConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import adm_remediation_recipe

admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetAdditionalParameters">reset_additional_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJenkinsUrl">reset_jenkins_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJobName">reset_job_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPatSecretId">reset_pat_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPipelineId">reset_pipeline_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetRepositoryUrl">reset_repository_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetTriggerSecretId">reset_trigger_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetWorkflowName">reset_workflow_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_parameters` <a name="reset_additional_parameters" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetAdditionalParameters"></a>

```python
def reset_additional_parameters() -> None
```

##### `reset_jenkins_url` <a name="reset_jenkins_url" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJenkinsUrl"></a>

```python
def reset_jenkins_url() -> None
```

##### `reset_job_name` <a name="reset_job_name" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJobName"></a>

```python
def reset_job_name() -> None
```

##### `reset_pat_secret_id` <a name="reset_pat_secret_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPatSecretId"></a>

```python
def reset_pat_secret_id() -> None
```

##### `reset_pipeline_id` <a name="reset_pipeline_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPipelineId"></a>

```python
def reset_pipeline_id() -> None
```

##### `reset_repository_url` <a name="reset_repository_url" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetRepositoryUrl"></a>

```python
def reset_repository_url() -> None
```

##### `reset_trigger_secret_id` <a name="reset_trigger_secret_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetTriggerSecretId"></a>

```python
def reset_trigger_secret_id() -> None
```

##### `reset_username` <a name="reset_username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_workflow_name` <a name="reset_workflow_name" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetWorkflowName"></a>

```python
def reset_workflow_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParametersInput">additional_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceTypeInput">build_service_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrlInput">jenkins_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobNameInput">job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretIdInput">pat_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineIdInput">pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrlInput">repository_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretIdInput">trigger_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowNameInput">workflow_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParameters">additional_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceType">build_service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrl">jenkins_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobName">job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretId">pat_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrl">repository_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretId">trigger_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowName">workflow_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_parameters_input`<sup>Optional</sup> <a name="additional_parameters_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParametersInput"></a>

```python
additional_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `build_service_type_input`<sup>Optional</sup> <a name="build_service_type_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceTypeInput"></a>

```python
build_service_type_input: str
```

- *Type:* str

---

##### `jenkins_url_input`<sup>Optional</sup> <a name="jenkins_url_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrlInput"></a>

```python
jenkins_url_input: str
```

- *Type:* str

---

##### `job_name_input`<sup>Optional</sup> <a name="job_name_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobNameInput"></a>

```python
job_name_input: str
```

- *Type:* str

---

##### `pat_secret_id_input`<sup>Optional</sup> <a name="pat_secret_id_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretIdInput"></a>

```python
pat_secret_id_input: str
```

- *Type:* str

---

##### `pipeline_id_input`<sup>Optional</sup> <a name="pipeline_id_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineIdInput"></a>

```python
pipeline_id_input: str
```

- *Type:* str

---

##### `repository_url_input`<sup>Optional</sup> <a name="repository_url_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrlInput"></a>

```python
repository_url_input: str
```

- *Type:* str

---

##### `trigger_secret_id_input`<sup>Optional</sup> <a name="trigger_secret_id_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretIdInput"></a>

```python
trigger_secret_id_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `workflow_name_input`<sup>Optional</sup> <a name="workflow_name_input" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowNameInput"></a>

```python
workflow_name_input: str
```

- *Type:* str

---

##### `additional_parameters`<sup>Required</sup> <a name="additional_parameters" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParameters"></a>

```python
additional_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `build_service_type`<sup>Required</sup> <a name="build_service_type" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceType"></a>

```python
build_service_type: str
```

- *Type:* str

---

##### `jenkins_url`<sup>Required</sup> <a name="jenkins_url" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrl"></a>

```python
jenkins_url: str
```

- *Type:* str

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

---

##### `pat_secret_id`<sup>Required</sup> <a name="pat_secret_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretId"></a>

```python
pat_secret_id: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

---

##### `trigger_secret_id`<sup>Required</sup> <a name="trigger_secret_id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretId"></a>

```python
trigger_secret_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `workflow_name`<sup>Required</sup> <a name="workflow_name" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowName"></a>

```python
workflow_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AdmRemediationRecipeVerifyConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

---



