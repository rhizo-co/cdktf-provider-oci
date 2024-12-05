# `opsiNewsReport` Submodule <a name="`opsiNewsReport` Submodule" id="rhizo-co-terraform-provider-oci.opsiNewsReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiNewsReport <a name="OpsiNewsReport" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report oci_opsi_news_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_news_report

opsiNewsReport.OpsiNewsReport(
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
  content_types: OpsiNewsReportContentTypes,
  description: str,
  locale: str,
  name: str,
  news_frequency: str,
  ons_topic_id: str,
  are_child_compartments_included: typing.Union[bool, IResolvable] = None,
  day_of_week: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  status: str = None,
  timeouts: OpsiNewsReportTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#compartment_id OpsiNewsReport#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.contentTypes">content_types</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a></code> | content_types block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#description OpsiNewsReport#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#locale OpsiNewsReport#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#name OpsiNewsReport#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.newsFrequency">news_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#news_frequency OpsiNewsReport#news_frequency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.onsTopicId">ons_topic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#ons_topic_id OpsiNewsReport#ons_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.areChildCompartmentsIncluded">are_child_compartments_included</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#are_child_compartments_included OpsiNewsReport#are_child_compartments_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.dayOfWeek">day_of_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#day_of_week OpsiNewsReport#day_of_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#defined_tags OpsiNewsReport#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#freeform_tags OpsiNewsReport#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#id OpsiNewsReport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#status OpsiNewsReport#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#compartment_id OpsiNewsReport#compartment_id}.

---

##### `content_types`<sup>Required</sup> <a name="content_types" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.contentTypes"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a>

content_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#content_types OpsiNewsReport#content_types}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#description OpsiNewsReport#description}.

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.locale"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#locale OpsiNewsReport#locale}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#name OpsiNewsReport#name}.

---

##### `news_frequency`<sup>Required</sup> <a name="news_frequency" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.newsFrequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#news_frequency OpsiNewsReport#news_frequency}.

---

##### `ons_topic_id`<sup>Required</sup> <a name="ons_topic_id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.onsTopicId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#ons_topic_id OpsiNewsReport#ons_topic_id}.

---

##### `are_child_compartments_included`<sup>Optional</sup> <a name="are_child_compartments_included" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.areChildCompartmentsIncluded"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#are_child_compartments_included OpsiNewsReport#are_child_compartments_included}.

---

##### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.dayOfWeek"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#day_of_week OpsiNewsReport#day_of_week}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#defined_tags OpsiNewsReport#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#freeform_tags OpsiNewsReport#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#id OpsiNewsReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#status OpsiNewsReport#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#timeouts OpsiNewsReport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes">put_content_types</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetAreChildCompartmentsIncluded">reset_are_child_compartments_included</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetDayOfWeek">reset_day_of_week</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_content_types` <a name="put_content_types" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes"></a>

```python
def put_content_types(
  capacity_planning_resources: typing.List[str] = None,
  sql_insights_fleet_analysis_resources: typing.List[str] = None,
  sql_insights_performance_degradation_resources: typing.List[str] = None,
  sql_insights_plan_changes_resources: typing.List[str] = None,
  sql_insights_top_databases_resources: typing.List[str] = None,
  sql_insights_top_sql_by_insights_resources: typing.List[str] = None,
  sql_insights_top_sql_resources: typing.List[str] = None
) -> None
```

###### `capacity_planning_resources`<sup>Optional</sup> <a name="capacity_planning_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes.parameter.capacityPlanningResources"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#capacity_planning_resources OpsiNewsReport#capacity_planning_resources}.

---

###### `sql_insights_fleet_analysis_resources`<sup>Optional</sup> <a name="sql_insights_fleet_analysis_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes.parameter.sqlInsightsFleetAnalysisResources"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_fleet_analysis_resources OpsiNewsReport#sql_insights_fleet_analysis_resources}.

---

###### `sql_insights_performance_degradation_resources`<sup>Optional</sup> <a name="sql_insights_performance_degradation_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes.parameter.sqlInsightsPerformanceDegradationResources"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_performance_degradation_resources OpsiNewsReport#sql_insights_performance_degradation_resources}.

---

###### `sql_insights_plan_changes_resources`<sup>Optional</sup> <a name="sql_insights_plan_changes_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes.parameter.sqlInsightsPlanChangesResources"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_plan_changes_resources OpsiNewsReport#sql_insights_plan_changes_resources}.

---

###### `sql_insights_top_databases_resources`<sup>Optional</sup> <a name="sql_insights_top_databases_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes.parameter.sqlInsightsTopDatabasesResources"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_databases_resources OpsiNewsReport#sql_insights_top_databases_resources}.

---

###### `sql_insights_top_sql_by_insights_resources`<sup>Optional</sup> <a name="sql_insights_top_sql_by_insights_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes.parameter.sqlInsightsTopSqlByInsightsResources"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_by_insights_resources OpsiNewsReport#sql_insights_top_sql_by_insights_resources}.

---

###### `sql_insights_top_sql_resources`<sup>Optional</sup> <a name="sql_insights_top_sql_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes.parameter.sqlInsightsTopSqlResources"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_resources OpsiNewsReport#sql_insights_top_sql_resources}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#create OpsiNewsReport#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#delete OpsiNewsReport#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#update OpsiNewsReport#update}.

---

##### `reset_are_child_compartments_included` <a name="reset_are_child_compartments_included" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetAreChildCompartmentsIncluded"></a>

```python
def reset_are_child_compartments_included() -> None
```

##### `reset_day_of_week` <a name="reset_day_of_week" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetDayOfWeek"></a>

```python
def reset_day_of_week() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OpsiNewsReport resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_news_report

opsiNewsReport.OpsiNewsReport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_news_report

opsiNewsReport.OpsiNewsReport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_news_report

opsiNewsReport.OpsiNewsReport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_news_report

opsiNewsReport.OpsiNewsReport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OpsiNewsReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpsiNewsReport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpsiNewsReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpsiNewsReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.contentTypes">content_types</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference">OpsiNewsReportContentTypesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference">OpsiNewsReportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.areChildCompartmentsIncludedInput">are_child_compartments_included_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.contentTypesInput">content_types_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.localeInput">locale_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.newsFrequencyInput">news_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.onsTopicIdInput">ons_topic_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.areChildCompartmentsIncluded">are_child_compartments_included</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.newsFrequency">news_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.onsTopicId">ons_topic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_types`<sup>Required</sup> <a name="content_types" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.contentTypes"></a>

```python
content_types: OpsiNewsReportContentTypesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference">OpsiNewsReportContentTypesOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeouts"></a>

```python
timeouts: OpsiNewsReportTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference">OpsiNewsReportTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `are_child_compartments_included_input`<sup>Optional</sup> <a name="are_child_compartments_included_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.areChildCompartmentsIncludedInput"></a>

```python
are_child_compartments_included_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `content_types_input`<sup>Optional</sup> <a name="content_types_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.contentTypesInput"></a>

```python
content_types_input: OpsiNewsReportContentTypes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a>

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `locale_input`<sup>Optional</sup> <a name="locale_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.localeInput"></a>

```python
locale_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `news_frequency_input`<sup>Optional</sup> <a name="news_frequency_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.newsFrequencyInput"></a>

```python
news_frequency_input: str
```

- *Type:* str

---

##### `ons_topic_id_input`<sup>Optional</sup> <a name="ons_topic_id_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.onsTopicIdInput"></a>

```python
ons_topic_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OpsiNewsReportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a>]

---

##### `are_child_compartments_included`<sup>Required</sup> <a name="are_child_compartments_included" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.areChildCompartmentsIncluded"></a>

```python
are_child_compartments_included: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `news_frequency`<sup>Required</sup> <a name="news_frequency" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.newsFrequency"></a>

```python
news_frequency: str
```

- *Type:* str

---

##### `ons_topic_id`<sup>Required</sup> <a name="ons_topic_id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.onsTopicId"></a>

```python
ons_topic_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiNewsReportConfig <a name="OpsiNewsReportConfig" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_news_report

opsiNewsReport.OpsiNewsReportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  content_types: OpsiNewsReportContentTypes,
  description: str,
  locale: str,
  name: str,
  news_frequency: str,
  ons_topic_id: str,
  are_child_compartments_included: typing.Union[bool, IResolvable] = None,
  day_of_week: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  status: str = None,
  timeouts: OpsiNewsReportTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#compartment_id OpsiNewsReport#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.contentTypes">content_types</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a></code> | content_types block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#description OpsiNewsReport#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#locale OpsiNewsReport#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#name OpsiNewsReport#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.newsFrequency">news_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#news_frequency OpsiNewsReport#news_frequency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.onsTopicId">ons_topic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#ons_topic_id OpsiNewsReport#ons_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.areChildCompartmentsIncluded">are_child_compartments_included</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#are_child_compartments_included OpsiNewsReport#are_child_compartments_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#day_of_week OpsiNewsReport#day_of_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#defined_tags OpsiNewsReport#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#freeform_tags OpsiNewsReport#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#id OpsiNewsReport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#status OpsiNewsReport#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#compartment_id OpsiNewsReport#compartment_id}.

---

##### `content_types`<sup>Required</sup> <a name="content_types" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.contentTypes"></a>

```python
content_types: OpsiNewsReportContentTypes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a>

content_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#content_types OpsiNewsReport#content_types}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#description OpsiNewsReport#description}.

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.locale"></a>

```python
locale: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#locale OpsiNewsReport#locale}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#name OpsiNewsReport#name}.

---

##### `news_frequency`<sup>Required</sup> <a name="news_frequency" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.newsFrequency"></a>

```python
news_frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#news_frequency OpsiNewsReport#news_frequency}.

---

##### `ons_topic_id`<sup>Required</sup> <a name="ons_topic_id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.onsTopicId"></a>

```python
ons_topic_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#ons_topic_id OpsiNewsReport#ons_topic_id}.

---

##### `are_child_compartments_included`<sup>Optional</sup> <a name="are_child_compartments_included" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.areChildCompartmentsIncluded"></a>

```python
are_child_compartments_included: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#are_child_compartments_included OpsiNewsReport#are_child_compartments_included}.

---

##### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#day_of_week OpsiNewsReport#day_of_week}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#defined_tags OpsiNewsReport#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#freeform_tags OpsiNewsReport#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#id OpsiNewsReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#status OpsiNewsReport#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.timeouts"></a>

```python
timeouts: OpsiNewsReportTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#timeouts OpsiNewsReport#timeouts}

---

### OpsiNewsReportContentTypes <a name="OpsiNewsReportContentTypes" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_news_report

opsiNewsReport.OpsiNewsReportContentTypes(
  capacity_planning_resources: typing.List[str] = None,
  sql_insights_fleet_analysis_resources: typing.List[str] = None,
  sql_insights_performance_degradation_resources: typing.List[str] = None,
  sql_insights_plan_changes_resources: typing.List[str] = None,
  sql_insights_top_databases_resources: typing.List[str] = None,
  sql_insights_top_sql_by_insights_resources: typing.List[str] = None,
  sql_insights_top_sql_resources: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.capacityPlanningResources">capacity_planning_resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#capacity_planning_resources OpsiNewsReport#capacity_planning_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsFleetAnalysisResources">sql_insights_fleet_analysis_resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_fleet_analysis_resources OpsiNewsReport#sql_insights_fleet_analysis_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsPerformanceDegradationResources">sql_insights_performance_degradation_resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_performance_degradation_resources OpsiNewsReport#sql_insights_performance_degradation_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsPlanChangesResources">sql_insights_plan_changes_resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_plan_changes_resources OpsiNewsReport#sql_insights_plan_changes_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopDatabasesResources">sql_insights_top_databases_resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_databases_resources OpsiNewsReport#sql_insights_top_databases_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopSqlByInsightsResources">sql_insights_top_sql_by_insights_resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_by_insights_resources OpsiNewsReport#sql_insights_top_sql_by_insights_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopSqlResources">sql_insights_top_sql_resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_resources OpsiNewsReport#sql_insights_top_sql_resources}. |

---

##### `capacity_planning_resources`<sup>Optional</sup> <a name="capacity_planning_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.capacityPlanningResources"></a>

```python
capacity_planning_resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#capacity_planning_resources OpsiNewsReport#capacity_planning_resources}.

---

##### `sql_insights_fleet_analysis_resources`<sup>Optional</sup> <a name="sql_insights_fleet_analysis_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsFleetAnalysisResources"></a>

```python
sql_insights_fleet_analysis_resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_fleet_analysis_resources OpsiNewsReport#sql_insights_fleet_analysis_resources}.

---

##### `sql_insights_performance_degradation_resources`<sup>Optional</sup> <a name="sql_insights_performance_degradation_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsPerformanceDegradationResources"></a>

```python
sql_insights_performance_degradation_resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_performance_degradation_resources OpsiNewsReport#sql_insights_performance_degradation_resources}.

---

##### `sql_insights_plan_changes_resources`<sup>Optional</sup> <a name="sql_insights_plan_changes_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsPlanChangesResources"></a>

```python
sql_insights_plan_changes_resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_plan_changes_resources OpsiNewsReport#sql_insights_plan_changes_resources}.

---

##### `sql_insights_top_databases_resources`<sup>Optional</sup> <a name="sql_insights_top_databases_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopDatabasesResources"></a>

```python
sql_insights_top_databases_resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_databases_resources OpsiNewsReport#sql_insights_top_databases_resources}.

---

##### `sql_insights_top_sql_by_insights_resources`<sup>Optional</sup> <a name="sql_insights_top_sql_by_insights_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopSqlByInsightsResources"></a>

```python
sql_insights_top_sql_by_insights_resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_by_insights_resources OpsiNewsReport#sql_insights_top_sql_by_insights_resources}.

---

##### `sql_insights_top_sql_resources`<sup>Optional</sup> <a name="sql_insights_top_sql_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopSqlResources"></a>

```python
sql_insights_top_sql_resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_resources OpsiNewsReport#sql_insights_top_sql_resources}.

---

### OpsiNewsReportTimeouts <a name="OpsiNewsReportTimeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_news_report

opsiNewsReport.OpsiNewsReportTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#create OpsiNewsReport#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#delete OpsiNewsReport#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#update OpsiNewsReport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#create OpsiNewsReport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#delete OpsiNewsReport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#update OpsiNewsReport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiNewsReportContentTypesOutputReference <a name="OpsiNewsReportContentTypesOutputReference" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_news_report

opsiNewsReport.OpsiNewsReportContentTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetCapacityPlanningResources">reset_capacity_planning_resources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsFleetAnalysisResources">reset_sql_insights_fleet_analysis_resources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsPerformanceDegradationResources">reset_sql_insights_performance_degradation_resources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsPlanChangesResources">reset_sql_insights_plan_changes_resources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopDatabasesResources">reset_sql_insights_top_databases_resources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopSqlByInsightsResources">reset_sql_insights_top_sql_by_insights_resources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopSqlResources">reset_sql_insights_top_sql_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_capacity_planning_resources` <a name="reset_capacity_planning_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetCapacityPlanningResources"></a>

```python
def reset_capacity_planning_resources() -> None
```

##### `reset_sql_insights_fleet_analysis_resources` <a name="reset_sql_insights_fleet_analysis_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsFleetAnalysisResources"></a>

```python
def reset_sql_insights_fleet_analysis_resources() -> None
```

##### `reset_sql_insights_performance_degradation_resources` <a name="reset_sql_insights_performance_degradation_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsPerformanceDegradationResources"></a>

```python
def reset_sql_insights_performance_degradation_resources() -> None
```

##### `reset_sql_insights_plan_changes_resources` <a name="reset_sql_insights_plan_changes_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsPlanChangesResources"></a>

```python
def reset_sql_insights_plan_changes_resources() -> None
```

##### `reset_sql_insights_top_databases_resources` <a name="reset_sql_insights_top_databases_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopDatabasesResources"></a>

```python
def reset_sql_insights_top_databases_resources() -> None
```

##### `reset_sql_insights_top_sql_by_insights_resources` <a name="reset_sql_insights_top_sql_by_insights_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopSqlByInsightsResources"></a>

```python
def reset_sql_insights_top_sql_by_insights_resources() -> None
```

##### `reset_sql_insights_top_sql_resources` <a name="reset_sql_insights_top_sql_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopSqlResources"></a>

```python
def reset_sql_insights_top_sql_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.capacityPlanningResourcesInput">capacity_planning_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsFleetAnalysisResourcesInput">sql_insights_fleet_analysis_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPerformanceDegradationResourcesInput">sql_insights_performance_degradation_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPlanChangesResourcesInput">sql_insights_plan_changes_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopDatabasesResourcesInput">sql_insights_top_databases_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlByInsightsResourcesInput">sql_insights_top_sql_by_insights_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlResourcesInput">sql_insights_top_sql_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.capacityPlanningResources">capacity_planning_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsFleetAnalysisResources">sql_insights_fleet_analysis_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPerformanceDegradationResources">sql_insights_performance_degradation_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPlanChangesResources">sql_insights_plan_changes_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopDatabasesResources">sql_insights_top_databases_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlByInsightsResources">sql_insights_top_sql_by_insights_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlResources">sql_insights_top_sql_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_planning_resources_input`<sup>Optional</sup> <a name="capacity_planning_resources_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.capacityPlanningResourcesInput"></a>

```python
capacity_planning_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sql_insights_fleet_analysis_resources_input`<sup>Optional</sup> <a name="sql_insights_fleet_analysis_resources_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsFleetAnalysisResourcesInput"></a>

```python
sql_insights_fleet_analysis_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sql_insights_performance_degradation_resources_input`<sup>Optional</sup> <a name="sql_insights_performance_degradation_resources_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPerformanceDegradationResourcesInput"></a>

```python
sql_insights_performance_degradation_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sql_insights_plan_changes_resources_input`<sup>Optional</sup> <a name="sql_insights_plan_changes_resources_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPlanChangesResourcesInput"></a>

```python
sql_insights_plan_changes_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sql_insights_top_databases_resources_input`<sup>Optional</sup> <a name="sql_insights_top_databases_resources_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopDatabasesResourcesInput"></a>

```python
sql_insights_top_databases_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sql_insights_top_sql_by_insights_resources_input`<sup>Optional</sup> <a name="sql_insights_top_sql_by_insights_resources_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlByInsightsResourcesInput"></a>

```python
sql_insights_top_sql_by_insights_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sql_insights_top_sql_resources_input`<sup>Optional</sup> <a name="sql_insights_top_sql_resources_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlResourcesInput"></a>

```python
sql_insights_top_sql_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capacity_planning_resources`<sup>Required</sup> <a name="capacity_planning_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.capacityPlanningResources"></a>

```python
capacity_planning_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sql_insights_fleet_analysis_resources`<sup>Required</sup> <a name="sql_insights_fleet_analysis_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsFleetAnalysisResources"></a>

```python
sql_insights_fleet_analysis_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sql_insights_performance_degradation_resources`<sup>Required</sup> <a name="sql_insights_performance_degradation_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPerformanceDegradationResources"></a>

```python
sql_insights_performance_degradation_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sql_insights_plan_changes_resources`<sup>Required</sup> <a name="sql_insights_plan_changes_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPlanChangesResources"></a>

```python
sql_insights_plan_changes_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sql_insights_top_databases_resources`<sup>Required</sup> <a name="sql_insights_top_databases_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopDatabasesResources"></a>

```python
sql_insights_top_databases_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sql_insights_top_sql_by_insights_resources`<sup>Required</sup> <a name="sql_insights_top_sql_by_insights_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlByInsightsResources"></a>

```python
sql_insights_top_sql_by_insights_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sql_insights_top_sql_resources`<sup>Required</sup> <a name="sql_insights_top_sql_resources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlResources"></a>

```python
sql_insights_top_sql_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.internalValue"></a>

```python
internal_value: OpsiNewsReportContentTypes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a>

---


### OpsiNewsReportTimeoutsOutputReference <a name="OpsiNewsReportTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_news_report

opsiNewsReport.OpsiNewsReportTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OpsiNewsReportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a>]

---



