# `marketplacePublication` Submodule <a name="`marketplacePublication` Submodule" id="rhizo-co-terraform-provider-oci.marketplacePublication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MarketplacePublication <a name="MarketplacePublication" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication oci_marketplace_publication}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublication(
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
  is_agreement_acknowledged: typing.Union[bool, IResolvable],
  listing_type: str,
  name: str,
  package_details: MarketplacePublicationPackageDetails,
  short_description: str,
  support_contacts: typing.Union[IResolvable, typing.List[MarketplacePublicationSupportContacts]],
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  long_description: str = None,
  timeouts: MarketplacePublicationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#compartment_id MarketplacePublication#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.isAgreementAcknowledged">is_agreement_acknowledged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#is_agreement_acknowledged MarketplacePublication#is_agreement_acknowledged}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.listingType">listing_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#listing_type MarketplacePublication#listing_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#name MarketplacePublication#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.packageDetails">package_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails">MarketplacePublicationPackageDetails</a></code> | package_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.shortDescription">short_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#short_description MarketplacePublication#short_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.supportContacts">support_contacts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts">MarketplacePublicationSupportContacts</a>]]</code> | support_contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#defined_tags MarketplacePublication#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#freeform_tags MarketplacePublication#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#id MarketplacePublication#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.longDescription">long_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#long_description MarketplacePublication#long_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts">MarketplacePublicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#compartment_id MarketplacePublication#compartment_id}.

---

##### `is_agreement_acknowledged`<sup>Required</sup> <a name="is_agreement_acknowledged" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.isAgreementAcknowledged"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#is_agreement_acknowledged MarketplacePublication#is_agreement_acknowledged}.

---

##### `listing_type`<sup>Required</sup> <a name="listing_type" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.listingType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#listing_type MarketplacePublication#listing_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#name MarketplacePublication#name}.

---

##### `package_details`<sup>Required</sup> <a name="package_details" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.packageDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails">MarketplacePublicationPackageDetails</a>

package_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#package_details MarketplacePublication#package_details}

---

##### `short_description`<sup>Required</sup> <a name="short_description" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.shortDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#short_description MarketplacePublication#short_description}.

---

##### `support_contacts`<sup>Required</sup> <a name="support_contacts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.supportContacts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts">MarketplacePublicationSupportContacts</a>]]

support_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#support_contacts MarketplacePublication#support_contacts}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#defined_tags MarketplacePublication#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#freeform_tags MarketplacePublication#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#id MarketplacePublication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `long_description`<sup>Optional</sup> <a name="long_description" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.longDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#long_description MarketplacePublication#long_description}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts">MarketplacePublicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#timeouts MarketplacePublication#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putPackageDetails">put_package_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putSupportContacts">put_support_contacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetLongDescription">reset_long_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_package_details` <a name="put_package_details" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putPackageDetails"></a>

```python
def put_package_details(
  eula: typing.Union[IResolvable, typing.List[MarketplacePublicationPackageDetailsEula]],
  operating_system: MarketplacePublicationPackageDetailsOperatingSystem,
  package_type: str,
  package_version: str,
  image_id: str = None
) -> None
```

###### `eula`<sup>Required</sup> <a name="eula" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putPackageDetails.parameter.eula"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula">MarketplacePublicationPackageDetailsEula</a>]]

eula block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#eula MarketplacePublication#eula}

---

###### `operating_system`<sup>Required</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putPackageDetails.parameter.operatingSystem"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem">MarketplacePublicationPackageDetailsOperatingSystem</a>

operating_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#operating_system MarketplacePublication#operating_system}

---

###### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putPackageDetails.parameter.packageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#package_type MarketplacePublication#package_type}.

---

###### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putPackageDetails.parameter.packageVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#package_version MarketplacePublication#package_version}.

---

###### `image_id`<sup>Optional</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putPackageDetails.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#image_id MarketplacePublication#image_id}.

---

##### `put_support_contacts` <a name="put_support_contacts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putSupportContacts"></a>

```python
def put_support_contacts(
  value: typing.Union[IResolvable, typing.List[MarketplacePublicationSupportContacts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putSupportContacts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts">MarketplacePublicationSupportContacts</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#create MarketplacePublication#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#delete MarketplacePublication#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#update MarketplacePublication#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_long_description` <a name="reset_long_description" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetLongDescription"></a>

```python
def reset_long_description() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MarketplacePublication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MarketplacePublication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MarketplacePublication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MarketplacePublication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MarketplacePublication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.icon">icon</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList">MarketplacePublicationIconList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.packageDetails">package_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference">MarketplacePublicationPackageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.supportContacts">support_contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList">MarketplacePublicationSupportContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.supportedOperatingSystems">supported_operating_systems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList">MarketplacePublicationSupportedOperatingSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference">MarketplacePublicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.isAgreementAcknowledgedInput">is_agreement_acknowledged_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.listingTypeInput">listing_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.longDescriptionInput">long_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.packageDetailsInput">package_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails">MarketplacePublicationPackageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.shortDescriptionInput">short_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.supportContactsInput">support_contacts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts">MarketplacePublicationSupportContacts</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts">MarketplacePublicationTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.isAgreementAcknowledged">is_agreement_acknowledged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.listingType">listing_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.longDescription">long_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.shortDescription">short_description</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `icon`<sup>Required</sup> <a name="icon" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.icon"></a>

```python
icon: MarketplacePublicationIconList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList">MarketplacePublicationIconList</a>

---

##### `package_details`<sup>Required</sup> <a name="package_details" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.packageDetails"></a>

```python
package_details: MarketplacePublicationPackageDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference">MarketplacePublicationPackageDetailsOutputReference</a>

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `support_contacts`<sup>Required</sup> <a name="support_contacts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.supportContacts"></a>

```python
support_contacts: MarketplacePublicationSupportContactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList">MarketplacePublicationSupportContactsList</a>

---

##### `supported_operating_systems`<sup>Required</sup> <a name="supported_operating_systems" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.supportedOperatingSystems"></a>

```python
supported_operating_systems: MarketplacePublicationSupportedOperatingSystemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList">MarketplacePublicationSupportedOperatingSystemsList</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.timeouts"></a>

```python
timeouts: MarketplacePublicationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference">MarketplacePublicationTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_agreement_acknowledged_input`<sup>Optional</sup> <a name="is_agreement_acknowledged_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.isAgreementAcknowledgedInput"></a>

```python
is_agreement_acknowledged_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `listing_type_input`<sup>Optional</sup> <a name="listing_type_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.listingTypeInput"></a>

```python
listing_type_input: str
```

- *Type:* str

---

##### `long_description_input`<sup>Optional</sup> <a name="long_description_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.longDescriptionInput"></a>

```python
long_description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `package_details_input`<sup>Optional</sup> <a name="package_details_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.packageDetailsInput"></a>

```python
package_details_input: MarketplacePublicationPackageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails">MarketplacePublicationPackageDetails</a>

---

##### `short_description_input`<sup>Optional</sup> <a name="short_description_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.shortDescriptionInput"></a>

```python
short_description_input: str
```

- *Type:* str

---

##### `support_contacts_input`<sup>Optional</sup> <a name="support_contacts_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.supportContactsInput"></a>

```python
support_contacts_input: typing.Union[IResolvable, typing.List[MarketplacePublicationSupportContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts">MarketplacePublicationSupportContacts</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MarketplacePublicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts">MarketplacePublicationTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_agreement_acknowledged`<sup>Required</sup> <a name="is_agreement_acknowledged" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.isAgreementAcknowledged"></a>

```python
is_agreement_acknowledged: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `listing_type`<sup>Required</sup> <a name="listing_type" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.listingType"></a>

```python
listing_type: str
```

- *Type:* str

---

##### `long_description`<sup>Required</sup> <a name="long_description" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.longDescription"></a>

```python
long_description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `short_description`<sup>Required</sup> <a name="short_description" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.shortDescription"></a>

```python
short_description: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MarketplacePublicationConfig <a name="MarketplacePublicationConfig" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  is_agreement_acknowledged: typing.Union[bool, IResolvable],
  listing_type: str,
  name: str,
  package_details: MarketplacePublicationPackageDetails,
  short_description: str,
  support_contacts: typing.Union[IResolvable, typing.List[MarketplacePublicationSupportContacts]],
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  long_description: str = None,
  timeouts: MarketplacePublicationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#compartment_id MarketplacePublication#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.isAgreementAcknowledged">is_agreement_acknowledged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#is_agreement_acknowledged MarketplacePublication#is_agreement_acknowledged}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.listingType">listing_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#listing_type MarketplacePublication#listing_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#name MarketplacePublication#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.packageDetails">package_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails">MarketplacePublicationPackageDetails</a></code> | package_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.shortDescription">short_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#short_description MarketplacePublication#short_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.supportContacts">support_contacts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts">MarketplacePublicationSupportContacts</a>]]</code> | support_contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#defined_tags MarketplacePublication#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#freeform_tags MarketplacePublication#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#id MarketplacePublication#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.longDescription">long_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#long_description MarketplacePublication#long_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts">MarketplacePublicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#compartment_id MarketplacePublication#compartment_id}.

---

##### `is_agreement_acknowledged`<sup>Required</sup> <a name="is_agreement_acknowledged" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.isAgreementAcknowledged"></a>

```python
is_agreement_acknowledged: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#is_agreement_acknowledged MarketplacePublication#is_agreement_acknowledged}.

---

##### `listing_type`<sup>Required</sup> <a name="listing_type" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.listingType"></a>

```python
listing_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#listing_type MarketplacePublication#listing_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#name MarketplacePublication#name}.

---

##### `package_details`<sup>Required</sup> <a name="package_details" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.packageDetails"></a>

```python
package_details: MarketplacePublicationPackageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails">MarketplacePublicationPackageDetails</a>

package_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#package_details MarketplacePublication#package_details}

---

##### `short_description`<sup>Required</sup> <a name="short_description" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.shortDescription"></a>

```python
short_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#short_description MarketplacePublication#short_description}.

---

##### `support_contacts`<sup>Required</sup> <a name="support_contacts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.supportContacts"></a>

```python
support_contacts: typing.Union[IResolvable, typing.List[MarketplacePublicationSupportContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts">MarketplacePublicationSupportContacts</a>]]

support_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#support_contacts MarketplacePublication#support_contacts}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#defined_tags MarketplacePublication#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#freeform_tags MarketplacePublication#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#id MarketplacePublication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `long_description`<sup>Optional</sup> <a name="long_description" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.longDescription"></a>

```python
long_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#long_description MarketplacePublication#long_description}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.timeouts"></a>

```python
timeouts: MarketplacePublicationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts">MarketplacePublicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#timeouts MarketplacePublication#timeouts}

---

### MarketplacePublicationIcon <a name="MarketplacePublicationIcon" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIcon"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIcon.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationIcon()
```


### MarketplacePublicationPackageDetails <a name="MarketplacePublicationPackageDetails" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationPackageDetails(
  eula: typing.Union[IResolvable, typing.List[MarketplacePublicationPackageDetailsEula]],
  operating_system: MarketplacePublicationPackageDetailsOperatingSystem,
  package_type: str,
  package_version: str,
  image_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.eula">eula</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula">MarketplacePublicationPackageDetailsEula</a>]]</code> | eula block. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.operatingSystem">operating_system</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem">MarketplacePublicationPackageDetailsOperatingSystem</a></code> | operating_system block. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.packageType">package_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#package_type MarketplacePublication#package_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.packageVersion">package_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#package_version MarketplacePublication#package_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#image_id MarketplacePublication#image_id}. |

---

##### `eula`<sup>Required</sup> <a name="eula" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.eula"></a>

```python
eula: typing.Union[IResolvable, typing.List[MarketplacePublicationPackageDetailsEula]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula">MarketplacePublicationPackageDetailsEula</a>]]

eula block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#eula MarketplacePublication#eula}

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.operatingSystem"></a>

```python
operating_system: MarketplacePublicationPackageDetailsOperatingSystem
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem">MarketplacePublicationPackageDetailsOperatingSystem</a>

operating_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#operating_system MarketplacePublication#operating_system}

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#package_type MarketplacePublication#package_type}.

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#package_version MarketplacePublication#package_version}.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#image_id MarketplacePublication#image_id}.

---

### MarketplacePublicationPackageDetailsEula <a name="MarketplacePublicationPackageDetailsEula" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationPackageDetailsEula(
  eula_type: str,
  license_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula.property.eulaType">eula_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#eula_type MarketplacePublication#eula_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula.property.licenseText">license_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#license_text MarketplacePublication#license_text}. |

---

##### `eula_type`<sup>Required</sup> <a name="eula_type" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula.property.eulaType"></a>

```python
eula_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#eula_type MarketplacePublication#eula_type}.

---

##### `license_text`<sup>Optional</sup> <a name="license_text" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula.property.licenseText"></a>

```python
license_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#license_text MarketplacePublication#license_text}.

---

### MarketplacePublicationPackageDetailsOperatingSystem <a name="MarketplacePublicationPackageDetailsOperatingSystem" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#name MarketplacePublication#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#name MarketplacePublication#name}.

---

### MarketplacePublicationSupportContacts <a name="MarketplacePublicationSupportContacts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationSupportContacts(
  email: str = None,
  name: str = None,
  phone: str = None,
  subject: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#email MarketplacePublication#email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#name MarketplacePublication#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.property.phone">phone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#phone MarketplacePublication#phone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.property.subject">subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#subject MarketplacePublication#subject}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#email MarketplacePublication#email}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#name MarketplacePublication#name}.

---

##### `phone`<sup>Optional</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.property.phone"></a>

```python
phone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#phone MarketplacePublication#phone}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.property.subject"></a>

```python
subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#subject MarketplacePublication#subject}.

---

### MarketplacePublicationSupportedOperatingSystems <a name="MarketplacePublicationSupportedOperatingSystems" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationSupportedOperatingSystems()
```


### MarketplacePublicationTimeouts <a name="MarketplacePublicationTimeouts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#create MarketplacePublication#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#delete MarketplacePublication#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#update MarketplacePublication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#create MarketplacePublication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#delete MarketplacePublication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#update MarketplacePublication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MarketplacePublicationIconList <a name="MarketplacePublicationIconList" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationIconList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MarketplacePublicationIconOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MarketplacePublicationIconOutputReference <a name="MarketplacePublicationIconOutputReference" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationIconOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.contentUrl">content_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIcon">MarketplacePublicationIcon</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_url`<sup>Required</sup> <a name="content_url" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.contentUrl"></a>

```python
content_url: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.internalValue"></a>

```python
internal_value: MarketplacePublicationIcon
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIcon">MarketplacePublicationIcon</a>

---


### MarketplacePublicationPackageDetailsEulaList <a name="MarketplacePublicationPackageDetailsEulaList" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationPackageDetailsEulaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MarketplacePublicationPackageDetailsEulaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula">MarketplacePublicationPackageDetailsEula</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MarketplacePublicationPackageDetailsEula]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula">MarketplacePublicationPackageDetailsEula</a>]]

---


### MarketplacePublicationPackageDetailsEulaOutputReference <a name="MarketplacePublicationPackageDetailsEulaOutputReference" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.resetLicenseText">reset_license_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_license_text` <a name="reset_license_text" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.resetLicenseText"></a>

```python
def reset_license_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.eulaTypeInput">eula_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.licenseTextInput">license_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.eulaType">eula_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.licenseText">license_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula">MarketplacePublicationPackageDetailsEula</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eula_type_input`<sup>Optional</sup> <a name="eula_type_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.eulaTypeInput"></a>

```python
eula_type_input: str
```

- *Type:* str

---

##### `license_text_input`<sup>Optional</sup> <a name="license_text_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.licenseTextInput"></a>

```python
license_text_input: str
```

- *Type:* str

---

##### `eula_type`<sup>Required</sup> <a name="eula_type" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.eulaType"></a>

```python
eula_type: str
```

- *Type:* str

---

##### `license_text`<sup>Required</sup> <a name="license_text" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.licenseText"></a>

```python
license_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MarketplacePublicationPackageDetailsEula]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula">MarketplacePublicationPackageDetailsEula</a>]

---


### MarketplacePublicationPackageDetailsOperatingSystemOutputReference <a name="MarketplacePublicationPackageDetailsOperatingSystemOutputReference" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem">MarketplacePublicationPackageDetailsOperatingSystem</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.internalValue"></a>

```python
internal_value: MarketplacePublicationPackageDetailsOperatingSystem
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem">MarketplacePublicationPackageDetailsOperatingSystem</a>

---


### MarketplacePublicationPackageDetailsOutputReference <a name="MarketplacePublicationPackageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationPackageDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.putEula">put_eula</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.putOperatingSystem">put_operating_system</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.resetImageId">reset_image_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_eula` <a name="put_eula" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.putEula"></a>

```python
def put_eula(
  value: typing.Union[IResolvable, typing.List[MarketplacePublicationPackageDetailsEula]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.putEula.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula">MarketplacePublicationPackageDetailsEula</a>]]

---

##### `put_operating_system` <a name="put_operating_system" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.putOperatingSystem"></a>

```python
def put_operating_system(
  name: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.putOperatingSystem.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#name MarketplacePublication#name}.

---

##### `reset_image_id` <a name="reset_image_id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.resetImageId"></a>

```python
def reset_image_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.eula">eula</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList">MarketplacePublicationPackageDetailsEulaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.operatingSystem">operating_system</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference">MarketplacePublicationPackageDetailsOperatingSystemOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.eulaInput">eula_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula">MarketplacePublicationPackageDetailsEula</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.operatingSystemInput">operating_system_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem">MarketplacePublicationPackageDetailsOperatingSystem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.packageTypeInput">package_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.packageVersionInput">package_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.packageVersion">package_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails">MarketplacePublicationPackageDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eula`<sup>Required</sup> <a name="eula" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.eula"></a>

```python
eula: MarketplacePublicationPackageDetailsEulaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList">MarketplacePublicationPackageDetailsEulaList</a>

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.operatingSystem"></a>

```python
operating_system: MarketplacePublicationPackageDetailsOperatingSystemOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference">MarketplacePublicationPackageDetailsOperatingSystemOutputReference</a>

---

##### `eula_input`<sup>Optional</sup> <a name="eula_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.eulaInput"></a>

```python
eula_input: typing.Union[IResolvable, typing.List[MarketplacePublicationPackageDetailsEula]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula">MarketplacePublicationPackageDetailsEula</a>]]

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `operating_system_input`<sup>Optional</sup> <a name="operating_system_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.operatingSystemInput"></a>

```python
operating_system_input: MarketplacePublicationPackageDetailsOperatingSystem
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem">MarketplacePublicationPackageDetailsOperatingSystem</a>

---

##### `package_type_input`<sup>Optional</sup> <a name="package_type_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.packageTypeInput"></a>

```python
package_type_input: str
```

- *Type:* str

---

##### `package_version_input`<sup>Optional</sup> <a name="package_version_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.packageVersionInput"></a>

```python
package_version_input: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.internalValue"></a>

```python
internal_value: MarketplacePublicationPackageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails">MarketplacePublicationPackageDetails</a>

---


### MarketplacePublicationSupportContactsList <a name="MarketplacePublicationSupportContactsList" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationSupportContactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MarketplacePublicationSupportContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts">MarketplacePublicationSupportContacts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MarketplacePublicationSupportContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts">MarketplacePublicationSupportContacts</a>]]

---


### MarketplacePublicationSupportContactsOutputReference <a name="MarketplacePublicationSupportContactsOutputReference" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationSupportContactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resetPhone">reset_phone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resetSubject">reset_subject</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_phone` <a name="reset_phone" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resetPhone"></a>

```python
def reset_phone() -> None
```

##### `reset_subject` <a name="reset_subject" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resetSubject"></a>

```python
def reset_subject() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.phoneInput">phone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts">MarketplacePublicationSupportContacts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `phone_input`<sup>Optional</sup> <a name="phone_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.phoneInput"></a>

```python
phone_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MarketplacePublicationSupportContacts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts">MarketplacePublicationSupportContacts</a>]

---


### MarketplacePublicationSupportedOperatingSystemsList <a name="MarketplacePublicationSupportedOperatingSystemsList" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MarketplacePublicationSupportedOperatingSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MarketplacePublicationSupportedOperatingSystemsOutputReference <a name="MarketplacePublicationSupportedOperatingSystemsOutputReference" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystems">MarketplacePublicationSupportedOperatingSystems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.property.internalValue"></a>

```python
internal_value: MarketplacePublicationSupportedOperatingSystems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystems">MarketplacePublicationSupportedOperatingSystems</a>

---


### MarketplacePublicationTimeoutsOutputReference <a name="MarketplacePublicationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_publication

marketplacePublication.MarketplacePublicationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts">MarketplacePublicationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MarketplacePublicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts">MarketplacePublicationTimeouts</a>]

---



