# `marketplaceAcceptedAgreement` Submodule <a name="`marketplaceAcceptedAgreement` Submodule" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MarketplaceAcceptedAgreement <a name="MarketplaceAcceptedAgreement" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement oci_marketplace_accepted_agreement}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_accepted_agreement

marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agreement_id: str,
  compartment_id: str,
  listing_id: str,
  package_version: str,
  signature: str,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: MarketplaceAcceptedAgreementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.agreementId">agreement_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#agreement_id MarketplaceAcceptedAgreement#agreement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#compartment_id MarketplaceAcceptedAgreement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.listingId">listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#listing_id MarketplaceAcceptedAgreement#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.packageVersion">package_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#package_version MarketplaceAcceptedAgreement#package_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.signature">signature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#signature MarketplaceAcceptedAgreement#signature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#defined_tags MarketplaceAcceptedAgreement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#display_name MarketplaceAcceptedAgreement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#freeform_tags MarketplaceAcceptedAgreement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#id MarketplaceAcceptedAgreement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agreement_id`<sup>Required</sup> <a name="agreement_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.agreementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#agreement_id MarketplaceAcceptedAgreement#agreement_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#compartment_id MarketplaceAcceptedAgreement#compartment_id}.

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.listingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#listing_id MarketplaceAcceptedAgreement#listing_id}.

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.packageVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#package_version MarketplaceAcceptedAgreement#package_version}.

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.signature"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#signature MarketplaceAcceptedAgreement#signature}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#defined_tags MarketplaceAcceptedAgreement#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#display_name MarketplaceAcceptedAgreement#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#freeform_tags MarketplaceAcceptedAgreement#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#id MarketplaceAcceptedAgreement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#timeouts MarketplaceAcceptedAgreement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#create MarketplaceAcceptedAgreement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#delete MarketplaceAcceptedAgreement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#update MarketplaceAcceptedAgreement#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MarketplaceAcceptedAgreement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_accepted_agreement

marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_accepted_agreement

marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_accepted_agreement

marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_accepted_agreement

marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MarketplaceAcceptedAgreement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MarketplaceAcceptedAgreement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MarketplaceAcceptedAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MarketplaceAcceptedAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeAccepted">time_accepted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference">MarketplaceAcceptedAgreementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.agreementIdInput">agreement_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.listingIdInput">listing_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.packageVersionInput">package_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.signatureInput">signature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.agreementId">agreement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.listingId">listing_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.packageVersion">package_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.signature">signature</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `time_accepted`<sup>Required</sup> <a name="time_accepted" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeAccepted"></a>

```python
time_accepted: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeouts"></a>

```python
timeouts: MarketplaceAcceptedAgreementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference">MarketplaceAcceptedAgreementTimeoutsOutputReference</a>

---

##### `agreement_id_input`<sup>Optional</sup> <a name="agreement_id_input" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.agreementIdInput"></a>

```python
agreement_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listing_id_input`<sup>Optional</sup> <a name="listing_id_input" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.listingIdInput"></a>

```python
listing_id_input: str
```

- *Type:* str

---

##### `package_version_input`<sup>Optional</sup> <a name="package_version_input" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.packageVersionInput"></a>

```python
package_version_input: str
```

- *Type:* str

---

##### `signature_input`<sup>Optional</sup> <a name="signature_input" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.signatureInput"></a>

```python
signature_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MarketplaceAcceptedAgreementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a>]

---

##### `agreement_id`<sup>Required</sup> <a name="agreement_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.agreementId"></a>

```python
agreement_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MarketplaceAcceptedAgreementConfig <a name="MarketplaceAcceptedAgreementConfig" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_accepted_agreement

marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agreement_id: str,
  compartment_id: str,
  listing_id: str,
  package_version: str,
  signature: str,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: MarketplaceAcceptedAgreementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.agreementId">agreement_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#agreement_id MarketplaceAcceptedAgreement#agreement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#compartment_id MarketplaceAcceptedAgreement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.listingId">listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#listing_id MarketplaceAcceptedAgreement#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.packageVersion">package_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#package_version MarketplaceAcceptedAgreement#package_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.signature">signature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#signature MarketplaceAcceptedAgreement#signature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#defined_tags MarketplaceAcceptedAgreement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#display_name MarketplaceAcceptedAgreement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#freeform_tags MarketplaceAcceptedAgreement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#id MarketplaceAcceptedAgreement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agreement_id`<sup>Required</sup> <a name="agreement_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.agreementId"></a>

```python
agreement_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#agreement_id MarketplaceAcceptedAgreement#agreement_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#compartment_id MarketplaceAcceptedAgreement#compartment_id}.

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#listing_id MarketplaceAcceptedAgreement#listing_id}.

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#package_version MarketplaceAcceptedAgreement#package_version}.

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.signature"></a>

```python
signature: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#signature MarketplaceAcceptedAgreement#signature}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#defined_tags MarketplaceAcceptedAgreement#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#display_name MarketplaceAcceptedAgreement#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#freeform_tags MarketplaceAcceptedAgreement#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#id MarketplaceAcceptedAgreement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.timeouts"></a>

```python
timeouts: MarketplaceAcceptedAgreementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#timeouts MarketplaceAcceptedAgreement#timeouts}

---

### MarketplaceAcceptedAgreementTimeouts <a name="MarketplaceAcceptedAgreementTimeouts" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_accepted_agreement

marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#create MarketplaceAcceptedAgreement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#delete MarketplaceAcceptedAgreement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#update MarketplaceAcceptedAgreement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#create MarketplaceAcceptedAgreement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#delete MarketplaceAcceptedAgreement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#update MarketplaceAcceptedAgreement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MarketplaceAcceptedAgreementTimeoutsOutputReference <a name="MarketplaceAcceptedAgreementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_accepted_agreement

marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MarketplaceAcceptedAgreementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a>]

---



