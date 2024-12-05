# `marketplaceListingPackageAgreement` Submodule <a name="`marketplaceListingPackageAgreement` Submodule" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MarketplaceListingPackageAgreement <a name="MarketplaceListingPackageAgreement" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement oci_marketplace_listing_package_agreement}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_listing_package_agreement

marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement(
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
  listing_id: str,
  package_version: str,
  compartment_id: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.agreementId">agreement_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#agreement_id MarketplaceListingPackageAgreement#agreement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.listingId">listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#listing_id MarketplaceListingPackageAgreement#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.packageVersion">package_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#package_version MarketplaceListingPackageAgreement#package_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#compartment_id MarketplaceListingPackageAgreement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#id MarketplaceListingPackageAgreement#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agreement_id`<sup>Required</sup> <a name="agreement_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.agreementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#agreement_id MarketplaceListingPackageAgreement#agreement_id}.

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.listingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#listing_id MarketplaceListingPackageAgreement#listing_id}.

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.packageVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#package_version MarketplaceListingPackageAgreement#package_version}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#compartment_id MarketplaceListingPackageAgreement#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#id MarketplaceListingPackageAgreement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MarketplaceListingPackageAgreement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_listing_package_agreement

marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_listing_package_agreement

marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_listing_package_agreement

marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_listing_package_agreement

marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MarketplaceListingPackageAgreement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MarketplaceListingPackageAgreement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MarketplaceListingPackageAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MarketplaceListingPackageAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.author">author</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.contentUrl">content_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.prompt">prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.signature">signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.agreementIdInput">agreement_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.listingIdInput">listing_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.packageVersionInput">package_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.agreementId">agreement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.listingId">listing_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.packageVersion">package_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `author`<sup>Required</sup> <a name="author" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.author"></a>

```python
author: str
```

- *Type:* str

---

##### `content_url`<sup>Required</sup> <a name="content_url" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.contentUrl"></a>

```python
content_url: str
```

- *Type:* str

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

##### `agreement_id_input`<sup>Optional</sup> <a name="agreement_id_input" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.agreementIdInput"></a>

```python
agreement_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listing_id_input`<sup>Optional</sup> <a name="listing_id_input" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.listingIdInput"></a>

```python
listing_id_input: str
```

- *Type:* str

---

##### `package_version_input`<sup>Optional</sup> <a name="package_version_input" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.packageVersionInput"></a>

```python
package_version_input: str
```

- *Type:* str

---

##### `agreement_id`<sup>Required</sup> <a name="agreement_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.agreementId"></a>

```python
agreement_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MarketplaceListingPackageAgreementConfig <a name="MarketplaceListingPackageAgreementConfig" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import marketplace_listing_package_agreement

marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agreement_id: str,
  listing_id: str,
  package_version: str,
  compartment_id: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.agreementId">agreement_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#agreement_id MarketplaceListingPackageAgreement#agreement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.listingId">listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#listing_id MarketplaceListingPackageAgreement#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.packageVersion">package_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#package_version MarketplaceListingPackageAgreement#package_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#compartment_id MarketplaceListingPackageAgreement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#id MarketplaceListingPackageAgreement#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agreement_id`<sup>Required</sup> <a name="agreement_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.agreementId"></a>

```python
agreement_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#agreement_id MarketplaceListingPackageAgreement#agreement_id}.

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#listing_id MarketplaceListingPackageAgreement#listing_id}.

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#package_version MarketplaceListingPackageAgreement#package_version}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#compartment_id MarketplaceListingPackageAgreement#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#id MarketplaceListingPackageAgreement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



