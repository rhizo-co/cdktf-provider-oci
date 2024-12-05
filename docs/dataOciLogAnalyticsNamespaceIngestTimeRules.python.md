# `dataOciLogAnalyticsNamespaceIngestTimeRules` Submodule <a name="`dataOciLogAnalyticsNamespaceIngestTimeRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceIngestTimeRules <a name="DataOciLogAnalyticsNamespaceIngestTimeRules" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules oci_log_analytics_namespace_ingest_time_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rules

dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules(
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
  namespace: str,
  condition_kind: str = None,
  display_name: str = None,
  field_name: str = None,
  field_value: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceIngestTimeRulesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#compartment_id DataOciLogAnalyticsNamespaceIngestTimeRules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#namespace DataOciLogAnalyticsNamespaceIngestTimeRules#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.conditionKind">condition_kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#condition_kind DataOciLogAnalyticsNamespaceIngestTimeRules#condition_kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#display_name DataOciLogAnalyticsNamespaceIngestTimeRules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.fieldName">field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_name DataOciLogAnalyticsNamespaceIngestTimeRules#field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.fieldValue">field_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_value DataOciLogAnalyticsNamespaceIngestTimeRules#field_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter">DataOciLogAnalyticsNamespaceIngestTimeRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#id DataOciLogAnalyticsNamespaceIngestTimeRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#state DataOciLogAnalyticsNamespaceIngestTimeRules#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#compartment_id DataOciLogAnalyticsNamespaceIngestTimeRules#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#namespace DataOciLogAnalyticsNamespaceIngestTimeRules#namespace}.

---

##### `condition_kind`<sup>Optional</sup> <a name="condition_kind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.conditionKind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#condition_kind DataOciLogAnalyticsNamespaceIngestTimeRules#condition_kind}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#display_name DataOciLogAnalyticsNamespaceIngestTimeRules#display_name}.

---

##### `field_name`<sup>Optional</sup> <a name="field_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.fieldName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_name DataOciLogAnalyticsNamespaceIngestTimeRules#field_name}.

---

##### `field_value`<sup>Optional</sup> <a name="field_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.fieldValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_value DataOciLogAnalyticsNamespaceIngestTimeRules#field_value}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter">DataOciLogAnalyticsNamespaceIngestTimeRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#filter DataOciLogAnalyticsNamespaceIngestTimeRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#id DataOciLogAnalyticsNamespaceIngestTimeRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#state DataOciLogAnalyticsNamespaceIngestTimeRules#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetConditionKind">reset_condition_kind</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFieldName">reset_field_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFieldValue">reset_field_value</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceIngestTimeRulesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter">DataOciLogAnalyticsNamespaceIngestTimeRulesFilter</a>]]

---

##### `reset_condition_kind` <a name="reset_condition_kind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetConditionKind"></a>

```python
def reset_condition_kind() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_field_name` <a name="reset_field_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFieldName"></a>

```python
def reset_field_name() -> None
```

##### `reset_field_value` <a name="reset_field_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFieldValue"></a>

```python
def reset_field_value() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceIngestTimeRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rules

dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rules

dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rules

dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rules

dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceIngestTimeRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceIngestTimeRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLogAnalyticsNamespaceIngestTimeRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceIngestTimeRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList">DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.ingestTimeRuleSummaryCollection">ingest_time_rule_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.conditionKindInput">condition_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldValueInput">field_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter">DataOciLogAnalyticsNamespaceIngestTimeRulesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.conditionKind">condition_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldValue">field_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.filter"></a>

```python
filter: DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList">DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList</a>

---

##### `ingest_time_rule_summary_collection`<sup>Required</sup> <a name="ingest_time_rule_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.ingestTimeRuleSummaryCollection"></a>

```python
ingest_time_rule_summary_collection: DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `condition_kind_input`<sup>Optional</sup> <a name="condition_kind_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.conditionKindInput"></a>

```python
condition_kind_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `field_value_input`<sup>Optional</sup> <a name="field_value_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldValueInput"></a>

```python
field_value_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceIngestTimeRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter">DataOciLogAnalyticsNamespaceIngestTimeRulesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `condition_kind`<sup>Required</sup> <a name="condition_kind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.conditionKind"></a>

```python
condition_kind: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `field_value`<sup>Required</sup> <a name="field_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldValue"></a>

```python
field_value: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceIngestTimeRulesConfig <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rules

dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  namespace: str,
  condition_kind: str = None,
  display_name: str = None,
  field_name: str = None,
  field_value: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceIngestTimeRulesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#compartment_id DataOciLogAnalyticsNamespaceIngestTimeRules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#namespace DataOciLogAnalyticsNamespaceIngestTimeRules#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.conditionKind">condition_kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#condition_kind DataOciLogAnalyticsNamespaceIngestTimeRules#condition_kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#display_name DataOciLogAnalyticsNamespaceIngestTimeRules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.fieldName">field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_name DataOciLogAnalyticsNamespaceIngestTimeRules#field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.fieldValue">field_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_value DataOciLogAnalyticsNamespaceIngestTimeRules#field_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter">DataOciLogAnalyticsNamespaceIngestTimeRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#id DataOciLogAnalyticsNamespaceIngestTimeRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#state DataOciLogAnalyticsNamespaceIngestTimeRules#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#compartment_id DataOciLogAnalyticsNamespaceIngestTimeRules#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#namespace DataOciLogAnalyticsNamespaceIngestTimeRules#namespace}.

---

##### `condition_kind`<sup>Optional</sup> <a name="condition_kind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.conditionKind"></a>

```python
condition_kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#condition_kind DataOciLogAnalyticsNamespaceIngestTimeRules#condition_kind}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#display_name DataOciLogAnalyticsNamespaceIngestTimeRules#display_name}.

---

##### `field_name`<sup>Optional</sup> <a name="field_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_name DataOciLogAnalyticsNamespaceIngestTimeRules#field_name}.

---

##### `field_value`<sup>Optional</sup> <a name="field_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.fieldValue"></a>

```python
field_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_value DataOciLogAnalyticsNamespaceIngestTimeRules#field_value}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceIngestTimeRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter">DataOciLogAnalyticsNamespaceIngestTimeRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#filter DataOciLogAnalyticsNamespaceIngestTimeRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#id DataOciLogAnalyticsNamespaceIngestTimeRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#state DataOciLogAnalyticsNamespaceIngestTimeRules#state}.

---

### DataOciLogAnalyticsNamespaceIngestTimeRulesFilter <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rules

dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#name DataOciLogAnalyticsNamespaceIngestTimeRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#values DataOciLogAnalyticsNamespaceIngestTimeRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#regex DataOciLogAnalyticsNamespaceIngestTimeRules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#name DataOciLogAnalyticsNamespaceIngestTimeRules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#values DataOciLogAnalyticsNamespaceIngestTimeRules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#regex DataOciLogAnalyticsNamespaceIngestTimeRules#regex}.

---

### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rules

dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection()
```


### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rules

dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rules

dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter">DataOciLogAnalyticsNamespaceIngestTimeRulesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceIngestTimeRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter">DataOciLogAnalyticsNamespaceIngestTimeRulesFilter</a>]]

---


### DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rules

dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter">DataOciLogAnalyticsNamespaceIngestTimeRulesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciLogAnalyticsNamespaceIngestTimeRulesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter">DataOciLogAnalyticsNamespaceIngestTimeRulesFilter</a>]

---


### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rules

dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rules

dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.conditionKind">condition_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fieldValue">field_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `condition_kind`<sup>Required</sup> <a name="condition_kind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.conditionKind"></a>

```python
condition_kind: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `field_value`<sup>Required</sup> <a name="field_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fieldValue"></a>

```python
field_value: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems</a>

---


### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rules

dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rules

dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection</a>

---



