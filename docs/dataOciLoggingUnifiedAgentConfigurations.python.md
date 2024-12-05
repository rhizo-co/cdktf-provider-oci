# `dataOciLoggingUnifiedAgentConfigurations` Submodule <a name="`dataOciLoggingUnifiedAgentConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoggingUnifiedAgentConfigurations <a name="DataOciLoggingUnifiedAgentConfigurations" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations oci_logging_unified_agent_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_logging_unified_agent_configurations

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciLoggingUnifiedAgentConfigurationsFilter]] = None,
  group_id: str = None,
  id: str = None,
  is_compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  log_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#compartment_id DataOciLoggingUnifiedAgentConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#display_name DataOciLoggingUnifiedAgentConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#group_id DataOciLoggingUnifiedAgentConfigurations#group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#id DataOciLoggingUnifiedAgentConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.isCompartmentIdInSubtree">is_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#is_compartment_id_in_subtree DataOciLoggingUnifiedAgentConfigurations#is_compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.logId">log_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#log_id DataOciLoggingUnifiedAgentConfigurations#log_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#state DataOciLoggingUnifiedAgentConfigurations#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#compartment_id DataOciLoggingUnifiedAgentConfigurations#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#display_name DataOciLoggingUnifiedAgentConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#filter DataOciLoggingUnifiedAgentConfigurations#filter}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.groupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#group_id DataOciLoggingUnifiedAgentConfigurations#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#id DataOciLoggingUnifiedAgentConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_compartment_id_in_subtree`<sup>Optional</sup> <a name="is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.isCompartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#is_compartment_id_in_subtree DataOciLoggingUnifiedAgentConfigurations#is_compartment_id_in_subtree}.

---

##### `log_id`<sup>Optional</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.logId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#log_id DataOciLoggingUnifiedAgentConfigurations#log_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#state DataOciLoggingUnifiedAgentConfigurations#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetIsCompartmentIdInSubtree">reset_is_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetLogId">reset_log_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciLoggingUnifiedAgentConfigurationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_compartment_id_in_subtree` <a name="reset_is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetIsCompartmentIdInSubtree"></a>

```python
def reset_is_compartment_id_in_subtree() -> None
```

##### `reset_log_id` <a name="reset_log_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetLogId"></a>

```python
def reset_log_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLoggingUnifiedAgentConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_logging_unified_agent_configurations

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_logging_unified_agent_configurations

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_logging_unified_agent_configurations

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_logging_unified_agent_configurations

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLoggingUnifiedAgentConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLoggingUnifiedAgentConfigurations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLoggingUnifiedAgentConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoggingUnifiedAgentConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList">DataOciLoggingUnifiedAgentConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.unifiedAgentConfigurationCollection">unified_agent_configuration_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.isCompartmentIdInSubtreeInput">is_compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.logIdInput">log_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.isCompartmentIdInSubtree">is_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.logId">log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.filter"></a>

```python
filter: DataOciLoggingUnifiedAgentConfigurationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList">DataOciLoggingUnifiedAgentConfigurationsFilterList</a>

---

##### `unified_agent_configuration_collection`<sup>Required</sup> <a name="unified_agent_configuration_collection" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.unifiedAgentConfigurationCollection"></a>

```python
unified_agent_configuration_collection: DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciLoggingUnifiedAgentConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>]]

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_compartment_id_in_subtree_input`<sup>Optional</sup> <a name="is_compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.isCompartmentIdInSubtreeInput"></a>

```python
is_compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_id_input`<sup>Optional</sup> <a name="log_id_input" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.logIdInput"></a>

```python
log_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_compartment_id_in_subtree`<sup>Required</sup> <a name="is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.isCompartmentIdInSubtree"></a>

```python
is_compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.logId"></a>

```python
log_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoggingUnifiedAgentConfigurationsConfig <a name="DataOciLoggingUnifiedAgentConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_logging_unified_agent_configurations

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciLoggingUnifiedAgentConfigurationsFilter]] = None,
  group_id: str = None,
  id: str = None,
  is_compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  log_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#compartment_id DataOciLoggingUnifiedAgentConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#display_name DataOciLoggingUnifiedAgentConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#group_id DataOciLoggingUnifiedAgentConfigurations#group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#id DataOciLoggingUnifiedAgentConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.isCompartmentIdInSubtree">is_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#is_compartment_id_in_subtree DataOciLoggingUnifiedAgentConfigurations#is_compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.logId">log_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#log_id DataOciLoggingUnifiedAgentConfigurations#log_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#state DataOciLoggingUnifiedAgentConfigurations#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#compartment_id DataOciLoggingUnifiedAgentConfigurations#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#display_name DataOciLoggingUnifiedAgentConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciLoggingUnifiedAgentConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#filter DataOciLoggingUnifiedAgentConfigurations#filter}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#group_id DataOciLoggingUnifiedAgentConfigurations#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#id DataOciLoggingUnifiedAgentConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_compartment_id_in_subtree`<sup>Optional</sup> <a name="is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.isCompartmentIdInSubtree"></a>

```python
is_compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#is_compartment_id_in_subtree DataOciLoggingUnifiedAgentConfigurations#is_compartment_id_in_subtree}.

---

##### `log_id`<sup>Optional</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.logId"></a>

```python
log_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#log_id DataOciLoggingUnifiedAgentConfigurations#log_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#state DataOciLoggingUnifiedAgentConfigurations#state}.

---

### DataOciLoggingUnifiedAgentConfigurationsFilter <a name="DataOciLoggingUnifiedAgentConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_logging_unified_agent_configurations

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#name DataOciLoggingUnifiedAgentConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#values DataOciLoggingUnifiedAgentConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#regex DataOciLoggingUnifiedAgentConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#name DataOciLoggingUnifiedAgentConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#values DataOciLoggingUnifiedAgentConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#regex DataOciLoggingUnifiedAgentConfigurations#regex}.

---

### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_logging_unified_agent_configurations

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection()
```


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_logging_unified_agent_configurations

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoggingUnifiedAgentConfigurationsFilterList <a name="DataOciLoggingUnifiedAgentConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_logging_unified_agent_configurations

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciLoggingUnifiedAgentConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>]]

---


### DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference <a name="DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_logging_unified_agent_configurations

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciLoggingUnifiedAgentConfigurationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>]

---


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_logging_unified_agent_configurations

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_logging_unified_agent_configurations

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.configurationState">configuration_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.configurationType">configuration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.timeLastModified">time_last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `configuration_state`<sup>Required</sup> <a name="configuration_state" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.configurationState"></a>

```python
configuration_state: str
```

- *Type:* str

---

##### `configuration_type`<sup>Required</sup> <a name="configuration_type" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.configurationType"></a>

```python
configuration_type: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_modified`<sup>Required</sup> <a name="time_last_modified" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.timeLastModified"></a>

```python
time_last_modified: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems</a>

---


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_logging_unified_agent_configurations

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_logging_unified_agent_configurations

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.items"></a>

```python
items: DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection</a>

---



