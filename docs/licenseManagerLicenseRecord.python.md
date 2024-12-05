# `licenseManagerLicenseRecord` Submodule <a name="`licenseManagerLicenseRecord` Submodule" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicenseManagerLicenseRecord <a name="LicenseManagerLicenseRecord" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record oci_license_manager_license_record}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import license_manager_license_record

licenseManagerLicenseRecord.LicenseManagerLicenseRecord(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  is_perpetual: typing.Union[bool, IResolvable],
  is_unlimited: typing.Union[bool, IResolvable],
  product_license_id: str,
  defined_tags: typing.Mapping[str] = None,
  expiration_date: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  license_count: typing.Union[int, float] = None,
  product_id: str = None,
  support_end_date: str = None,
  timeouts: LicenseManagerLicenseRecordTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#display_name LicenseManagerLicenseRecord#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.isPerpetual">is_perpetual</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_perpetual LicenseManagerLicenseRecord#is_perpetual}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.isUnlimited">is_unlimited</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_unlimited LicenseManagerLicenseRecord#is_unlimited}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.productLicenseId">product_license_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_license_id LicenseManagerLicenseRecord#product_license_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#defined_tags LicenseManagerLicenseRecord#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.expirationDate">expiration_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#expiration_date LicenseManagerLicenseRecord#expiration_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#freeform_tags LicenseManagerLicenseRecord#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#id LicenseManagerLicenseRecord#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.licenseCount">license_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#license_count LicenseManagerLicenseRecord#license_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_id LicenseManagerLicenseRecord#product_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.supportEndDate">support_end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#support_end_date LicenseManagerLicenseRecord#support_end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#display_name LicenseManagerLicenseRecord#display_name}.

---

##### `is_perpetual`<sup>Required</sup> <a name="is_perpetual" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.isPerpetual"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_perpetual LicenseManagerLicenseRecord#is_perpetual}.

---

##### `is_unlimited`<sup>Required</sup> <a name="is_unlimited" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.isUnlimited"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_unlimited LicenseManagerLicenseRecord#is_unlimited}.

---

##### `product_license_id`<sup>Required</sup> <a name="product_license_id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.productLicenseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_license_id LicenseManagerLicenseRecord#product_license_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#defined_tags LicenseManagerLicenseRecord#defined_tags}.

---

##### `expiration_date`<sup>Optional</sup> <a name="expiration_date" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.expirationDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#expiration_date LicenseManagerLicenseRecord#expiration_date}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#freeform_tags LicenseManagerLicenseRecord#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#id LicenseManagerLicenseRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_count`<sup>Optional</sup> <a name="license_count" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.licenseCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#license_count LicenseManagerLicenseRecord#license_count}.

---

##### `product_id`<sup>Optional</sup> <a name="product_id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.productId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_id LicenseManagerLicenseRecord#product_id}.

---

##### `support_end_date`<sup>Optional</sup> <a name="support_end_date" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.supportEndDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#support_end_date LicenseManagerLicenseRecord#support_end_date}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#timeouts LicenseManagerLicenseRecord#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetExpirationDate">reset_expiration_date</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetLicenseCount">reset_license_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetProductId">reset_product_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetSupportEndDate">reset_support_end_date</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#create LicenseManagerLicenseRecord#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#delete LicenseManagerLicenseRecord#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#update LicenseManagerLicenseRecord#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_expiration_date` <a name="reset_expiration_date" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetExpirationDate"></a>

```python
def reset_expiration_date() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_license_count` <a name="reset_license_count" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetLicenseCount"></a>

```python
def reset_license_count() -> None
```

##### `reset_product_id` <a name="reset_product_id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetProductId"></a>

```python
def reset_product_id() -> None
```

##### `reset_support_end_date` <a name="reset_support_end_date" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetSupportEndDate"></a>

```python
def reset_support_end_date() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LicenseManagerLicenseRecord resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import license_manager_license_record

licenseManagerLicenseRecord.LicenseManagerLicenseRecord.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import license_manager_license_record

licenseManagerLicenseRecord.LicenseManagerLicenseRecord.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import license_manager_license_record

licenseManagerLicenseRecord.LicenseManagerLicenseRecord.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import license_manager_license_record

licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LicenseManagerLicenseRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LicenseManagerLicenseRecord to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LicenseManagerLicenseRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LicenseManagerLicenseRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseUnit">license_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicense">product_license</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference">LicenseManagerLicenseRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.expirationDateInput">expiration_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isPerpetualInput">is_perpetual_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isUnlimitedInput">is_unlimited_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseCountInput">license_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicenseIdInput">product_license_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.supportEndDateInput">support_end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.expirationDate">expiration_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isPerpetual">is_perpetual</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isUnlimited">is_unlimited</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseCount">license_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicenseId">product_license_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.supportEndDate">support_end_date</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `license_unit`<sup>Required</sup> <a name="license_unit" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseUnit"></a>

```python
license_unit: str
```

- *Type:* str

---

##### `product_license`<sup>Required</sup> <a name="product_license" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicense"></a>

```python
product_license: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeouts"></a>

```python
timeouts: LicenseManagerLicenseRecordTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference">LicenseManagerLicenseRecordTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `expiration_date_input`<sup>Optional</sup> <a name="expiration_date_input" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.expirationDateInput"></a>

```python
expiration_date_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_perpetual_input`<sup>Optional</sup> <a name="is_perpetual_input" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isPerpetualInput"></a>

```python
is_perpetual_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_unlimited_input`<sup>Optional</sup> <a name="is_unlimited_input" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isUnlimitedInput"></a>

```python
is_unlimited_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `license_count_input`<sup>Optional</sup> <a name="license_count_input" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseCountInput"></a>

```python
license_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `product_license_id_input`<sup>Optional</sup> <a name="product_license_id_input" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicenseIdInput"></a>

```python
product_license_id_input: str
```

- *Type:* str

---

##### `support_end_date_input`<sup>Optional</sup> <a name="support_end_date_input" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.supportEndDateInput"></a>

```python
support_end_date_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LicenseManagerLicenseRecordTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a>]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `expiration_date`<sup>Required</sup> <a name="expiration_date" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_perpetual`<sup>Required</sup> <a name="is_perpetual" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isPerpetual"></a>

```python
is_perpetual: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_unlimited`<sup>Required</sup> <a name="is_unlimited" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isUnlimited"></a>

```python
is_unlimited: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `license_count`<sup>Required</sup> <a name="license_count" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseCount"></a>

```python
license_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `product_license_id`<sup>Required</sup> <a name="product_license_id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicenseId"></a>

```python
product_license_id: str
```

- *Type:* str

---

##### `support_end_date`<sup>Required</sup> <a name="support_end_date" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.supportEndDate"></a>

```python
support_end_date: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LicenseManagerLicenseRecordConfig <a name="LicenseManagerLicenseRecordConfig" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import license_manager_license_record

licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  is_perpetual: typing.Union[bool, IResolvable],
  is_unlimited: typing.Union[bool, IResolvable],
  product_license_id: str,
  defined_tags: typing.Mapping[str] = None,
  expiration_date: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  license_count: typing.Union[int, float] = None,
  product_id: str = None,
  support_end_date: str = None,
  timeouts: LicenseManagerLicenseRecordTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#display_name LicenseManagerLicenseRecord#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.isPerpetual">is_perpetual</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_perpetual LicenseManagerLicenseRecord#is_perpetual}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.isUnlimited">is_unlimited</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_unlimited LicenseManagerLicenseRecord#is_unlimited}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.productLicenseId">product_license_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_license_id LicenseManagerLicenseRecord#product_license_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#defined_tags LicenseManagerLicenseRecord#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.expirationDate">expiration_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#expiration_date LicenseManagerLicenseRecord#expiration_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#freeform_tags LicenseManagerLicenseRecord#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#id LicenseManagerLicenseRecord#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.licenseCount">license_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#license_count LicenseManagerLicenseRecord#license_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_id LicenseManagerLicenseRecord#product_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.supportEndDate">support_end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#support_end_date LicenseManagerLicenseRecord#support_end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#display_name LicenseManagerLicenseRecord#display_name}.

---

##### `is_perpetual`<sup>Required</sup> <a name="is_perpetual" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.isPerpetual"></a>

```python
is_perpetual: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_perpetual LicenseManagerLicenseRecord#is_perpetual}.

---

##### `is_unlimited`<sup>Required</sup> <a name="is_unlimited" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.isUnlimited"></a>

```python
is_unlimited: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_unlimited LicenseManagerLicenseRecord#is_unlimited}.

---

##### `product_license_id`<sup>Required</sup> <a name="product_license_id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.productLicenseId"></a>

```python
product_license_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_license_id LicenseManagerLicenseRecord#product_license_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#defined_tags LicenseManagerLicenseRecord#defined_tags}.

---

##### `expiration_date`<sup>Optional</sup> <a name="expiration_date" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#expiration_date LicenseManagerLicenseRecord#expiration_date}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#freeform_tags LicenseManagerLicenseRecord#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#id LicenseManagerLicenseRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_count`<sup>Optional</sup> <a name="license_count" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.licenseCount"></a>

```python
license_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#license_count LicenseManagerLicenseRecord#license_count}.

---

##### `product_id`<sup>Optional</sup> <a name="product_id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.productId"></a>

```python
product_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_id LicenseManagerLicenseRecord#product_id}.

---

##### `support_end_date`<sup>Optional</sup> <a name="support_end_date" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.supportEndDate"></a>

```python
support_end_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#support_end_date LicenseManagerLicenseRecord#support_end_date}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.timeouts"></a>

```python
timeouts: LicenseManagerLicenseRecordTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#timeouts LicenseManagerLicenseRecord#timeouts}

---

### LicenseManagerLicenseRecordTimeouts <a name="LicenseManagerLicenseRecordTimeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import license_manager_license_record

licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#create LicenseManagerLicenseRecord#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#delete LicenseManagerLicenseRecord#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#update LicenseManagerLicenseRecord#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#create LicenseManagerLicenseRecord#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#delete LicenseManagerLicenseRecord#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#update LicenseManagerLicenseRecord#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LicenseManagerLicenseRecordTimeoutsOutputReference <a name="LicenseManagerLicenseRecordTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import license_manager_license_record

licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LicenseManagerLicenseRecordTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a>]

---



