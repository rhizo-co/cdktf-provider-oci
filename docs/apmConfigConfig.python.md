# `apmConfigConfig` Submodule <a name="`apmConfigConfig` Submodule" id="rhizo-co-terraform-provider-oci.apmConfigConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmConfigConfig <a name="ApmConfigConfig" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config oci_apm_config_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  config_type: str,
  display_name: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  dimensions: typing.Union[IResolvable, typing.List[ApmConfigConfigDimensions]] = None,
  filter_id: str = None,
  filter_text: str = None,
  freeform_tags: typing.Mapping[str] = None,
  group: str = None,
  id: str = None,
  in_use_by: typing.Union[IResolvable, typing.List[ApmConfigConfigInUseBy]] = None,
  metrics: typing.Union[IResolvable, typing.List[ApmConfigConfigMetrics]] = None,
  namespace: str = None,
  opc_dry_run: str = None,
  options: str = None,
  rules: typing.Union[IResolvable, typing.List[ApmConfigConfigRules]] = None,
  timeouts: ApmConfigConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#apm_domain_id ApmConfigConfig#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.configType">config_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#config_type ApmConfigConfig#config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#defined_tags ApmConfigConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#description ApmConfigConfig#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.dimensions">dimensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>]]</code> | dimensions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.filterId">filter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_id ApmConfigConfig#filter_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.filterText">filter_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#freeform_tags ApmConfigConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.group">group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#group ApmConfigConfig#group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#id ApmConfigConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.inUseBy">in_use_by</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>]]</code> | in_use_by block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.metrics">metrics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>]]</code> | metrics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#namespace ApmConfigConfig#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.opcDryRun">opc_dry_run</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#opc_dry_run ApmConfigConfig#opc_dry_run}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.options">options</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#options ApmConfigConfig#options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>]]</code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.apmDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#apm_domain_id ApmConfigConfig#apm_domain_id}.

---

##### `config_type`<sup>Required</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.configType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#config_type ApmConfigConfig#config_type}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#defined_tags ApmConfigConfig#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#description ApmConfigConfig#description}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.dimensions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#dimensions ApmConfigConfig#dimensions}

---

##### `filter_id`<sup>Optional</sup> <a name="filter_id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.filterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_id ApmConfigConfig#filter_id}.

---

##### `filter_text`<sup>Optional</sup> <a name="filter_text" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.filterText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#freeform_tags ApmConfigConfig#freeform_tags}.

---

##### `group`<sup>Optional</sup> <a name="group" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.group"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#group ApmConfigConfig#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#id ApmConfigConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in_use_by`<sup>Optional</sup> <a name="in_use_by" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.inUseBy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>]]

in_use_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#in_use_by ApmConfigConfig#in_use_by}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.metrics"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>]]

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#metrics ApmConfigConfig#metrics}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#namespace ApmConfigConfig#namespace}.

---

##### `opc_dry_run`<sup>Optional</sup> <a name="opc_dry_run" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.opcDryRun"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#opc_dry_run ApmConfigConfig#opc_dry_run}.

---

##### `options`<sup>Optional</sup> <a name="options" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.options"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#options ApmConfigConfig#options}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#rules ApmConfigConfig#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#timeouts ApmConfigConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putInUseBy">put_in_use_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putMetrics">put_metrics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFilterId">reset_filter_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFilterText">reset_filter_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetInUseBy">reset_in_use_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetMetrics">reset_metrics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOpcDryRun">reset_opc_dry_run</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetRules">reset_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dimensions` <a name="put_dimensions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putDimensions"></a>

```python
def put_dimensions(
  value: typing.Union[IResolvable, typing.List[ApmConfigConfigDimensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putDimensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>]]

---

##### `put_in_use_by` <a name="put_in_use_by" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putInUseBy"></a>

```python
def put_in_use_by(
  value: typing.Union[IResolvable, typing.List[ApmConfigConfigInUseBy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putInUseBy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>]]

---

##### `put_metrics` <a name="put_metrics" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putMetrics"></a>

```python
def put_metrics(
  value: typing.Union[IResolvable, typing.List[ApmConfigConfigMetrics]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putMetrics.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>]]

---

##### `put_rules` <a name="put_rules" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[ApmConfigConfigRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#create ApmConfigConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#delete ApmConfigConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#update ApmConfigConfig#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_filter_id` <a name="reset_filter_id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFilterId"></a>

```python
def reset_filter_id() -> None
```

##### `reset_filter_text` <a name="reset_filter_text" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFilterText"></a>

```python
def reset_filter_text() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_group` <a name="reset_group" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_in_use_by` <a name="reset_in_use_by" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetInUseBy"></a>

```python
def reset_in_use_by() -> None
```

##### `reset_metrics` <a name="reset_metrics" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetMetrics"></a>

```python
def reset_metrics() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_opc_dry_run` <a name="reset_opc_dry_run" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOpcDryRun"></a>

```python
def reset_opc_dry_run() -> None
```

##### `reset_options` <a name="reset_options" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_rules` <a name="reset_rules" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetRules"></a>

```python
def reset_rules() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApmConfigConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApmConfigConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApmConfigConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApmConfigConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApmConfigConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList">ApmConfigConfigDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.inUseBy">in_use_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList">ApmConfigConfigInUseByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList">ApmConfigConfigMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList">ApmConfigConfigRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference">ApmConfigConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.apmDomainIdInput">apm_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.configTypeInput">config_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterIdInput">filter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterTextInput">filter_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.inUseByInput">in_use_by_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.metricsInput">metrics_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.opcDryRunInput">opc_dry_run_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.optionsInput">options_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.configType">config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterId">filter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterText">filter_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.opcDryRun">opc_dry_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.options">options</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dimensions"></a>

```python
dimensions: ApmConfigConfigDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList">ApmConfigConfigDimensionsList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `in_use_by`<sup>Required</sup> <a name="in_use_by" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.inUseBy"></a>

```python
in_use_by: ApmConfigConfigInUseByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList">ApmConfigConfigInUseByList</a>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.metrics"></a>

```python
metrics: ApmConfigConfigMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList">ApmConfigConfigMetricsList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.rules"></a>

```python
rules: ApmConfigConfigRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList">ApmConfigConfigRulesList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeouts"></a>

```python
timeouts: ApmConfigConfigTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference">ApmConfigConfigTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `apm_domain_id_input`<sup>Optional</sup> <a name="apm_domain_id_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.apmDomainIdInput"></a>

```python
apm_domain_id_input: str
```

- *Type:* str

---

##### `config_type_input`<sup>Optional</sup> <a name="config_type_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.configTypeInput"></a>

```python
config_type_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dimensionsInput"></a>

```python
dimensions_input: typing.Union[IResolvable, typing.List[ApmConfigConfigDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>]]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_id_input`<sup>Optional</sup> <a name="filter_id_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterIdInput"></a>

```python
filter_id_input: str
```

- *Type:* str

---

##### `filter_text_input`<sup>Optional</sup> <a name="filter_text_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterTextInput"></a>

```python
filter_text_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `in_use_by_input`<sup>Optional</sup> <a name="in_use_by_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.inUseByInput"></a>

```python
in_use_by_input: typing.Union[IResolvable, typing.List[ApmConfigConfigInUseBy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>]]

---

##### `metrics_input`<sup>Optional</sup> <a name="metrics_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.metricsInput"></a>

```python
metrics_input: typing.Union[IResolvable, typing.List[ApmConfigConfigMetrics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>]]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `opc_dry_run_input`<sup>Optional</sup> <a name="opc_dry_run_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.opcDryRunInput"></a>

```python
opc_dry_run_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.optionsInput"></a>

```python
options_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[ApmConfigConfigRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApmConfigConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a>]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `config_type`<sup>Required</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.configType"></a>

```python
config_type: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `filter_id`<sup>Required</sup> <a name="filter_id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterId"></a>

```python
filter_id: str
```

- *Type:* str

---

##### `filter_text`<sup>Required</sup> <a name="filter_text" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterText"></a>

```python
filter_text: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `group`<sup>Required</sup> <a name="group" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `opc_dry_run`<sup>Required</sup> <a name="opc_dry_run" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.opcDryRun"></a>

```python
opc_dry_run: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.options"></a>

```python
options: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApmConfigConfigConfig <a name="ApmConfigConfigConfig" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  config_type: str,
  display_name: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  dimensions: typing.Union[IResolvable, typing.List[ApmConfigConfigDimensions]] = None,
  filter_id: str = None,
  filter_text: str = None,
  freeform_tags: typing.Mapping[str] = None,
  group: str = None,
  id: str = None,
  in_use_by: typing.Union[IResolvable, typing.List[ApmConfigConfigInUseBy]] = None,
  metrics: typing.Union[IResolvable, typing.List[ApmConfigConfigMetrics]] = None,
  namespace: str = None,
  opc_dry_run: str = None,
  options: str = None,
  rules: typing.Union[IResolvable, typing.List[ApmConfigConfigRules]] = None,
  timeouts: ApmConfigConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#apm_domain_id ApmConfigConfig#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.configType">config_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#config_type ApmConfigConfig#config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#defined_tags ApmConfigConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#description ApmConfigConfig#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.dimensions">dimensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>]]</code> | dimensions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.filterId">filter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_id ApmConfigConfig#filter_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.filterText">filter_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#freeform_tags ApmConfigConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.group">group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#group ApmConfigConfig#group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#id ApmConfigConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.inUseBy">in_use_by</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>]]</code> | in_use_by block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.metrics">metrics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>]]</code> | metrics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#namespace ApmConfigConfig#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.opcDryRun">opc_dry_run</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#opc_dry_run ApmConfigConfig#opc_dry_run}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.options">options</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#options ApmConfigConfig#options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>]]</code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#apm_domain_id ApmConfigConfig#apm_domain_id}.

---

##### `config_type`<sup>Required</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.configType"></a>

```python
config_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#config_type ApmConfigConfig#config_type}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#defined_tags ApmConfigConfig#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#description ApmConfigConfig#description}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.dimensions"></a>

```python
dimensions: typing.Union[IResolvable, typing.List[ApmConfigConfigDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#dimensions ApmConfigConfig#dimensions}

---

##### `filter_id`<sup>Optional</sup> <a name="filter_id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.filterId"></a>

```python
filter_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_id ApmConfigConfig#filter_id}.

---

##### `filter_text`<sup>Optional</sup> <a name="filter_text" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.filterText"></a>

```python
filter_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#freeform_tags ApmConfigConfig#freeform_tags}.

---

##### `group`<sup>Optional</sup> <a name="group" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.group"></a>

```python
group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#group ApmConfigConfig#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#id ApmConfigConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in_use_by`<sup>Optional</sup> <a name="in_use_by" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.inUseBy"></a>

```python
in_use_by: typing.Union[IResolvable, typing.List[ApmConfigConfigInUseBy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>]]

in_use_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#in_use_by ApmConfigConfig#in_use_by}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.metrics"></a>

```python
metrics: typing.Union[IResolvable, typing.List[ApmConfigConfigMetrics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>]]

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#metrics ApmConfigConfig#metrics}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#namespace ApmConfigConfig#namespace}.

---

##### `opc_dry_run`<sup>Optional</sup> <a name="opc_dry_run" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.opcDryRun"></a>

```python
opc_dry_run: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#opc_dry_run ApmConfigConfig#opc_dry_run}.

---

##### `options`<sup>Optional</sup> <a name="options" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.options"></a>

```python
options: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#options ApmConfigConfig#options}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[ApmConfigConfigRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#rules ApmConfigConfig#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.timeouts"></a>

```python
timeouts: ApmConfigConfigTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#timeouts ApmConfigConfig#timeouts}

---

### ApmConfigConfigDimensions <a name="ApmConfigConfigDimensions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfigDimensions(
  name: str = None,
  value_source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#name ApmConfigConfig#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions.property.valueSource">value_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#value_source ApmConfigConfig#value_source}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#name ApmConfigConfig#name}.

---

##### `value_source`<sup>Optional</sup> <a name="value_source" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions.property.valueSource"></a>

```python
value_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#value_source ApmConfigConfig#value_source}.

---

### ApmConfigConfigInUseBy <a name="ApmConfigConfigInUseBy" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfigInUseBy()
```


### ApmConfigConfigMetrics <a name="ApmConfigConfigMetrics" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfigMetrics(
  description: str = None,
  name: str = None,
  unit: str = None,
  value_source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#description ApmConfigConfig#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#name ApmConfigConfig#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#unit ApmConfigConfig#unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.valueSource">value_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#value_source ApmConfigConfig#value_source}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#description ApmConfigConfig#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#name ApmConfigConfig#name}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#unit ApmConfigConfig#unit}.

---

##### `value_source`<sup>Optional</sup> <a name="value_source" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.valueSource"></a>

```python
value_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#value_source ApmConfigConfig#value_source}.

---

### ApmConfigConfigRules <a name="ApmConfigConfigRules" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfigRules(
  display_name: str = None,
  filter_text: str = None,
  is_apply_to_error_spans: typing.Union[bool, IResolvable] = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  priority: typing.Union[int, float] = None,
  satisfied_response_time: typing.Union[int, float] = None,
  tolerating_response_time: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.filterText">filter_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.isApplyToErrorSpans">is_apply_to_error_spans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#is_apply_to_error_spans ApmConfigConfig#is_apply_to_error_spans}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#is_enabled ApmConfigConfig#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#priority ApmConfigConfig#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.satisfiedResponseTime">satisfied_response_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#satisfied_response_time ApmConfigConfig#satisfied_response_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.toleratingResponseTime">tolerating_response_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#tolerating_response_time ApmConfigConfig#tolerating_response_time}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}.

---

##### `filter_text`<sup>Optional</sup> <a name="filter_text" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.filterText"></a>

```python
filter_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}.

---

##### `is_apply_to_error_spans`<sup>Optional</sup> <a name="is_apply_to_error_spans" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.isApplyToErrorSpans"></a>

```python
is_apply_to_error_spans: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#is_apply_to_error_spans ApmConfigConfig#is_apply_to_error_spans}.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#is_enabled ApmConfigConfig#is_enabled}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#priority ApmConfigConfig#priority}.

---

##### `satisfied_response_time`<sup>Optional</sup> <a name="satisfied_response_time" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.satisfiedResponseTime"></a>

```python
satisfied_response_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#satisfied_response_time ApmConfigConfig#satisfied_response_time}.

---

##### `tolerating_response_time`<sup>Optional</sup> <a name="tolerating_response_time" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.toleratingResponseTime"></a>

```python
tolerating_response_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#tolerating_response_time ApmConfigConfig#tolerating_response_time}.

---

### ApmConfigConfigTimeouts <a name="ApmConfigConfigTimeouts" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#create ApmConfigConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#delete ApmConfigConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#update ApmConfigConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#create ApmConfigConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#delete ApmConfigConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#update ApmConfigConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApmConfigConfigDimensionsList <a name="ApmConfigConfigDimensionsList" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfigDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApmConfigConfigDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApmConfigConfigDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>]]

---


### ApmConfigConfigDimensionsOutputReference <a name="ApmConfigConfigDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfigDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resetValueSource">reset_value_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value_source` <a name="reset_value_source" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resetValueSource"></a>

```python
def reset_value_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.valueSourceInput">value_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.valueSource">value_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_source_input`<sup>Optional</sup> <a name="value_source_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.valueSourceInput"></a>

```python
value_source_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value_source`<sup>Required</sup> <a name="value_source" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.valueSource"></a>

```python
value_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApmConfigConfigDimensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>]

---


### ApmConfigConfigInUseByList <a name="ApmConfigConfigInUseByList" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfigInUseByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApmConfigConfigInUseByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApmConfigConfigInUseBy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>]]

---


### ApmConfigConfigInUseByOutputReference <a name="ApmConfigConfigInUseByOutputReference" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfigInUseByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.configType">config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.optionsGroup">options_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_type`<sup>Required</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.configType"></a>

```python
config_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `options_group`<sup>Required</sup> <a name="options_group" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.optionsGroup"></a>

```python
options_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApmConfigConfigInUseBy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>]

---


### ApmConfigConfigMetricsList <a name="ApmConfigConfigMetricsList" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfigMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApmConfigConfigMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApmConfigConfigMetrics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>]]

---


### ApmConfigConfigMetricsOutputReference <a name="ApmConfigConfigMetricsOutputReference" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfigMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetUnit">reset_unit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetValueSource">reset_value_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_unit` <a name="reset_unit" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```

##### `reset_value_source` <a name="reset_value_source" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetValueSource"></a>

```python
def reset_value_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.valueSourceInput">value_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.valueSource">value_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_source_input`<sup>Optional</sup> <a name="value_source_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.valueSourceInput"></a>

```python
value_source_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value_source`<sup>Required</sup> <a name="value_source" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.valueSource"></a>

```python
value_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApmConfigConfigMetrics]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>]

---


### ApmConfigConfigRulesList <a name="ApmConfigConfigRulesList" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfigRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApmConfigConfigRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApmConfigConfigRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>]]

---


### ApmConfigConfigRulesOutputReference <a name="ApmConfigConfigRulesOutputReference" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfigRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetFilterText">reset_filter_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetIsApplyToErrorSpans">reset_is_apply_to_error_spans</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetSatisfiedResponseTime">reset_satisfied_response_time</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetToleratingResponseTime">reset_tolerating_response_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter_text` <a name="reset_filter_text" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetFilterText"></a>

```python
def reset_filter_text() -> None
```

##### `reset_is_apply_to_error_spans` <a name="reset_is_apply_to_error_spans" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetIsApplyToErrorSpans"></a>

```python
def reset_is_apply_to_error_spans() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_priority` <a name="reset_priority" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_satisfied_response_time` <a name="reset_satisfied_response_time" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetSatisfiedResponseTime"></a>

```python
def reset_satisfied_response_time() -> None
```

##### `reset_tolerating_response_time` <a name="reset_tolerating_response_time" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetToleratingResponseTime"></a>

```python
def reset_tolerating_response_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.filterTextInput">filter_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isApplyToErrorSpansInput">is_apply_to_error_spans_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.satisfiedResponseTimeInput">satisfied_response_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.toleratingResponseTimeInput">tolerating_response_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.filterText">filter_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isApplyToErrorSpans">is_apply_to_error_spans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.satisfiedResponseTime">satisfied_response_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.toleratingResponseTime">tolerating_response_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_text_input`<sup>Optional</sup> <a name="filter_text_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.filterTextInput"></a>

```python
filter_text_input: str
```

- *Type:* str

---

##### `is_apply_to_error_spans_input`<sup>Optional</sup> <a name="is_apply_to_error_spans_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isApplyToErrorSpansInput"></a>

```python
is_apply_to_error_spans_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `satisfied_response_time_input`<sup>Optional</sup> <a name="satisfied_response_time_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.satisfiedResponseTimeInput"></a>

```python
satisfied_response_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tolerating_response_time_input`<sup>Optional</sup> <a name="tolerating_response_time_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.toleratingResponseTimeInput"></a>

```python
tolerating_response_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `filter_text`<sup>Required</sup> <a name="filter_text" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.filterText"></a>

```python
filter_text: str
```

- *Type:* str

---

##### `is_apply_to_error_spans`<sup>Required</sup> <a name="is_apply_to_error_spans" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isApplyToErrorSpans"></a>

```python
is_apply_to_error_spans: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `satisfied_response_time`<sup>Required</sup> <a name="satisfied_response_time" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.satisfiedResponseTime"></a>

```python
satisfied_response_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tolerating_response_time`<sup>Required</sup> <a name="tolerating_response_time" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.toleratingResponseTime"></a>

```python
tolerating_response_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApmConfigConfigRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>]

---


### ApmConfigConfigTimeoutsOutputReference <a name="ApmConfigConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_config_config

apmConfigConfig.ApmConfigConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApmConfigConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a>]

---



