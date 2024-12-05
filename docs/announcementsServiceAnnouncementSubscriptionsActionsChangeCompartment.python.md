# `announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment` Submodule <a name="`announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment` Submodule" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment <a name="AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment oci_announcements_service_announcement_subscriptions_actions_change_compartment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscriptions_actions_change_compartment

announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  announcement_subscription_id: str,
  compartment_id: str,
  id: str = None,
  timeouts: AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.announcementSubscriptionId">announcement_subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#announcement_subscription_id AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#announcement_subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#compartment_id AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#id AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts">AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `announcement_subscription_id`<sup>Required</sup> <a name="announcement_subscription_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.announcementSubscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#announcement_subscription_id AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#announcement_subscription_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#compartment_id AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#id AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts">AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#timeouts AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#create AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#delete AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#update AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscriptions_actions_change_compartment

announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscriptions_actions_change_compartment

announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscriptions_actions_change_compartment

announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscriptions_actions_change_compartment

announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference">AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.announcementSubscriptionIdInput">announcement_subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts">AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.announcementSubscriptionId">announcement_subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.timeouts"></a>

```python
timeouts: AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference">AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference</a>

---

##### `announcement_subscription_id_input`<sup>Optional</sup> <a name="announcement_subscription_id_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.announcementSubscriptionIdInput"></a>

```python
announcement_subscription_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts">AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts</a>]

---

##### `announcement_subscription_id`<sup>Required</sup> <a name="announcement_subscription_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.announcementSubscriptionId"></a>

```python
announcement_subscription_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig <a name="AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscriptions_actions_change_compartment

announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  announcement_subscription_id: str,
  compartment_id: str,
  id: str = None,
  timeouts: AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.announcementSubscriptionId">announcement_subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#announcement_subscription_id AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#announcement_subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#compartment_id AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#id AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts">AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `announcement_subscription_id`<sup>Required</sup> <a name="announcement_subscription_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.announcementSubscriptionId"></a>

```python
announcement_subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#announcement_subscription_id AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#announcement_subscription_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#compartment_id AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#id AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig.property.timeouts"></a>

```python
timeouts: AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts">AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#timeouts AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#timeouts}

---

### AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts <a name="AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscriptions_actions_change_compartment

announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#create AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#delete AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#update AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#create AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#delete AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#update AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference <a name="AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import announcements_service_announcement_subscriptions_actions_change_compartment

announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts">AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsActionsChangeCompartment.AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts">AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts</a>]

---



