# `announcementsServiceAnnouncementSubscription` Submodule <a name="`announcementsServiceAnnouncementSubscription` Submodule" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AnnouncementsServiceAnnouncementSubscription <a name="AnnouncementsServiceAnnouncementSubscription" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription oci_announcements_service_announcement_subscription}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscription

announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription(
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
  display_name: str,
  ons_topic_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  filter_groups: AnnouncementsServiceAnnouncementSubscriptionFilterGroups = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  preferred_language: str = None,
  preferred_time_zone: str = None,
  timeouts: AnnouncementsServiceAnnouncementSubscriptionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#compartment_id AnnouncementsServiceAnnouncementSubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#display_name AnnouncementsServiceAnnouncementSubscription#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.onsTopicId">ons_topic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#ons_topic_id AnnouncementsServiceAnnouncementSubscription#ons_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#defined_tags AnnouncementsServiceAnnouncementSubscription#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#description AnnouncementsServiceAnnouncementSubscription#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.filterGroups">filter_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a></code> | filter_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#freeform_tags AnnouncementsServiceAnnouncementSubscription#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#id AnnouncementsServiceAnnouncementSubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.preferredLanguage">preferred_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#preferred_language AnnouncementsServiceAnnouncementSubscription#preferred_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.preferredTimeZone">preferred_time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#preferred_time_zone AnnouncementsServiceAnnouncementSubscription#preferred_time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#compartment_id AnnouncementsServiceAnnouncementSubscription#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#display_name AnnouncementsServiceAnnouncementSubscription#display_name}.

---

##### `ons_topic_id`<sup>Required</sup> <a name="ons_topic_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.onsTopicId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#ons_topic_id AnnouncementsServiceAnnouncementSubscription#ons_topic_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#defined_tags AnnouncementsServiceAnnouncementSubscription#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#description AnnouncementsServiceAnnouncementSubscription#description}.

---

##### `filter_groups`<sup>Optional</sup> <a name="filter_groups" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.filterGroups"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a>

filter_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#filter_groups AnnouncementsServiceAnnouncementSubscription#filter_groups}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#freeform_tags AnnouncementsServiceAnnouncementSubscription#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#id AnnouncementsServiceAnnouncementSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preferred_language`<sup>Optional</sup> <a name="preferred_language" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.preferredLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#preferred_language AnnouncementsServiceAnnouncementSubscription#preferred_language}.

---

##### `preferred_time_zone`<sup>Optional</sup> <a name="preferred_time_zone" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.preferredTimeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#preferred_time_zone AnnouncementsServiceAnnouncementSubscription#preferred_time_zone}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#timeouts AnnouncementsServiceAnnouncementSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putFilterGroups">put_filter_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetFilterGroups">reset_filter_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetPreferredLanguage">reset_preferred_language</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetPreferredTimeZone">reset_preferred_time_zone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filter_groups` <a name="put_filter_groups" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putFilterGroups"></a>

```python
def put_filter_groups(
  filters: typing.Union[IResolvable, typing.List[AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters]]
) -> None
```

###### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putFilterGroups.parameter.filters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>]]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#filters AnnouncementsServiceAnnouncementSubscription#filters}

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#create AnnouncementsServiceAnnouncementSubscription#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#delete AnnouncementsServiceAnnouncementSubscription#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#update AnnouncementsServiceAnnouncementSubscription#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_filter_groups` <a name="reset_filter_groups" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetFilterGroups"></a>

```python
def reset_filter_groups() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_preferred_language` <a name="reset_preferred_language" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetPreferredLanguage"></a>

```python
def reset_preferred_language() -> None
```

##### `reset_preferred_time_zone` <a name="reset_preferred_time_zone" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetPreferredTimeZone"></a>

```python
def reset_preferred_time_zone() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AnnouncementsServiceAnnouncementSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscription

announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscription

announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscription

announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscription

announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AnnouncementsServiceAnnouncementSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AnnouncementsServiceAnnouncementSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AnnouncementsServiceAnnouncementSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AnnouncementsServiceAnnouncementSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.filterGroups">filter_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference">AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.filterGroupsInput">filter_groups_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.onsTopicIdInput">ons_topic_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredLanguageInput">preferred_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredTimeZoneInput">preferred_time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.onsTopicId">ons_topic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredTimeZone">preferred_time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter_groups`<sup>Required</sup> <a name="filter_groups" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.filterGroups"></a>

```python
filter_groups: AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeouts"></a>

```python
timeouts: AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference">AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_groups_input`<sup>Optional</sup> <a name="filter_groups_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.filterGroupsInput"></a>

```python
filter_groups_input: AnnouncementsServiceAnnouncementSubscriptionFilterGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a>

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ons_topic_id_input`<sup>Optional</sup> <a name="ons_topic_id_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.onsTopicIdInput"></a>

```python
ons_topic_id_input: str
```

- *Type:* str

---

##### `preferred_language_input`<sup>Optional</sup> <a name="preferred_language_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredLanguageInput"></a>

```python
preferred_language_input: str
```

- *Type:* str

---

##### `preferred_time_zone_input`<sup>Optional</sup> <a name="preferred_time_zone_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredTimeZoneInput"></a>

```python
preferred_time_zone_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AnnouncementsServiceAnnouncementSubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ons_topic_id`<sup>Required</sup> <a name="ons_topic_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.onsTopicId"></a>

```python
ons_topic_id: str
```

- *Type:* str

---

##### `preferred_language`<sup>Required</sup> <a name="preferred_language" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

---

##### `preferred_time_zone`<sup>Required</sup> <a name="preferred_time_zone" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredTimeZone"></a>

```python
preferred_time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AnnouncementsServiceAnnouncementSubscriptionConfig <a name="AnnouncementsServiceAnnouncementSubscriptionConfig" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscription

announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  ons_topic_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  filter_groups: AnnouncementsServiceAnnouncementSubscriptionFilterGroups = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  preferred_language: str = None,
  preferred_time_zone: str = None,
  timeouts: AnnouncementsServiceAnnouncementSubscriptionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#compartment_id AnnouncementsServiceAnnouncementSubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#display_name AnnouncementsServiceAnnouncementSubscription#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.onsTopicId">ons_topic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#ons_topic_id AnnouncementsServiceAnnouncementSubscription#ons_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#defined_tags AnnouncementsServiceAnnouncementSubscription#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#description AnnouncementsServiceAnnouncementSubscription#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.filterGroups">filter_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a></code> | filter_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#freeform_tags AnnouncementsServiceAnnouncementSubscription#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#id AnnouncementsServiceAnnouncementSubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#preferred_language AnnouncementsServiceAnnouncementSubscription#preferred_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.preferredTimeZone">preferred_time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#preferred_time_zone AnnouncementsServiceAnnouncementSubscription#preferred_time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#compartment_id AnnouncementsServiceAnnouncementSubscription#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#display_name AnnouncementsServiceAnnouncementSubscription#display_name}.

---

##### `ons_topic_id`<sup>Required</sup> <a name="ons_topic_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.onsTopicId"></a>

```python
ons_topic_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#ons_topic_id AnnouncementsServiceAnnouncementSubscription#ons_topic_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#defined_tags AnnouncementsServiceAnnouncementSubscription#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#description AnnouncementsServiceAnnouncementSubscription#description}.

---

##### `filter_groups`<sup>Optional</sup> <a name="filter_groups" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.filterGroups"></a>

```python
filter_groups: AnnouncementsServiceAnnouncementSubscriptionFilterGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a>

filter_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#filter_groups AnnouncementsServiceAnnouncementSubscription#filter_groups}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#freeform_tags AnnouncementsServiceAnnouncementSubscription#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#id AnnouncementsServiceAnnouncementSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preferred_language`<sup>Optional</sup> <a name="preferred_language" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#preferred_language AnnouncementsServiceAnnouncementSubscription#preferred_language}.

---

##### `preferred_time_zone`<sup>Optional</sup> <a name="preferred_time_zone" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.preferredTimeZone"></a>

```python
preferred_time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#preferred_time_zone AnnouncementsServiceAnnouncementSubscription#preferred_time_zone}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.timeouts"></a>

```python
timeouts: AnnouncementsServiceAnnouncementSubscriptionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#timeouts AnnouncementsServiceAnnouncementSubscription#timeouts}

---

### AnnouncementsServiceAnnouncementSubscriptionFilterGroups <a name="AnnouncementsServiceAnnouncementSubscriptionFilterGroups" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscription

announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups(
  filters: typing.Union[IResolvable, typing.List[AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups.property.filters">filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>]]</code> | filters block. |

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups.property.filters"></a>

```python
filters: typing.Union[IResolvable, typing.List[AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>]]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#filters AnnouncementsServiceAnnouncementSubscription#filters}

---

### AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters <a name="AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscription

announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters(
  type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#type AnnouncementsServiceAnnouncementSubscription#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#value AnnouncementsServiceAnnouncementSubscription#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#type AnnouncementsServiceAnnouncementSubscription#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#value AnnouncementsServiceAnnouncementSubscription#value}.

---

### AnnouncementsServiceAnnouncementSubscriptionTimeouts <a name="AnnouncementsServiceAnnouncementSubscriptionTimeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscription

announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#create AnnouncementsServiceAnnouncementSubscription#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#delete AnnouncementsServiceAnnouncementSubscription#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#update AnnouncementsServiceAnnouncementSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#create AnnouncementsServiceAnnouncementSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#delete AnnouncementsServiceAnnouncementSubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#update AnnouncementsServiceAnnouncementSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList <a name="AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscription

announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>]]

---


### AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference <a name="AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscription

announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>]

---


### AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference <a name="AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscription

announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.putFilters">put_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filters` <a name="put_filters" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.putFilters"></a>

```python
def put_filters(
  value: typing.Union[IResolvable, typing.List[AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.putFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.filters">filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.filtersInput">filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.filters"></a>

```python
filters: AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.filtersInput"></a>

```python
filters_input: typing.Union[IResolvable, typing.List[AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.internalValue"></a>

```python
internal_value: AnnouncementsServiceAnnouncementSubscriptionFilterGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a>

---


### AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference <a name="AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscription

announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AnnouncementsServiceAnnouncementSubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a>]

---



