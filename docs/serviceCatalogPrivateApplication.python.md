# `serviceCatalogPrivateApplication` Submodule <a name="`serviceCatalogPrivateApplication` Submodule" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceCatalogPrivateApplication <a name="ServiceCatalogPrivateApplication" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application oci_service_catalog_private_application}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_catalog_private_application

serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication(
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
  package_details: ServiceCatalogPrivateApplicationPackageDetails,
  short_description: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  logo_file_base64_encoded: str = None,
  long_description: str = None,
  timeouts: ServiceCatalogPrivateApplicationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#compartment_id ServiceCatalogPrivateApplication#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#display_name ServiceCatalogPrivateApplication#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.packageDetails">package_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a></code> | package_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.shortDescription">short_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#short_description ServiceCatalogPrivateApplication#short_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#defined_tags ServiceCatalogPrivateApplication#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#freeform_tags ServiceCatalogPrivateApplication#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#id ServiceCatalogPrivateApplication#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.logoFileBase64Encoded">logo_file_base64_encoded</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#logo_file_base64encoded ServiceCatalogPrivateApplication#logo_file_base64encoded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.longDescription">long_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#long_description ServiceCatalogPrivateApplication#long_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#compartment_id ServiceCatalogPrivateApplication#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#display_name ServiceCatalogPrivateApplication#display_name}.

---

##### `package_details`<sup>Required</sup> <a name="package_details" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.packageDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a>

package_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#package_details ServiceCatalogPrivateApplication#package_details}

---

##### `short_description`<sup>Required</sup> <a name="short_description" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.shortDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#short_description ServiceCatalogPrivateApplication#short_description}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#defined_tags ServiceCatalogPrivateApplication#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#freeform_tags ServiceCatalogPrivateApplication#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#id ServiceCatalogPrivateApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo_file_base64_encoded`<sup>Optional</sup> <a name="logo_file_base64_encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.logoFileBase64Encoded"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#logo_file_base64encoded ServiceCatalogPrivateApplication#logo_file_base64encoded}.

---

##### `long_description`<sup>Optional</sup> <a name="long_description" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.longDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#long_description ServiceCatalogPrivateApplication#long_description}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#timeouts ServiceCatalogPrivateApplication#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putPackageDetails">put_package_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetLogoFileBase64Encoded">reset_logo_file_base64_encoded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetLongDescription">reset_long_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_package_details` <a name="put_package_details" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putPackageDetails"></a>

```python
def put_package_details(
  package_type: str,
  version: str,
  zip_file_base64_encoded: str = None
) -> None
```

###### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putPackageDetails.parameter.packageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#package_type ServiceCatalogPrivateApplication#package_type}.

---

###### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putPackageDetails.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#version ServiceCatalogPrivateApplication#version}.

---

###### `zip_file_base64_encoded`<sup>Optional</sup> <a name="zip_file_base64_encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putPackageDetails.parameter.zipFileBase64Encoded"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#zip_file_base64encoded ServiceCatalogPrivateApplication#zip_file_base64encoded}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#create ServiceCatalogPrivateApplication#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#delete ServiceCatalogPrivateApplication#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#update ServiceCatalogPrivateApplication#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logo_file_base64_encoded` <a name="reset_logo_file_base64_encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetLogoFileBase64Encoded"></a>

```python
def reset_logo_file_base64_encoded() -> None
```

##### `reset_long_description` <a name="reset_long_description" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetLongDescription"></a>

```python
def reset_long_description() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServiceCatalogPrivateApplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import service_catalog_private_application

serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import service_catalog_private_application

serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import service_catalog_private_application

serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import service_catalog_private_application

serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServiceCatalogPrivateApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServiceCatalogPrivateApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServiceCatalogPrivateApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceCatalogPrivateApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logo">logo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList">ServiceCatalogPrivateApplicationLogoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageDetails">package_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference">ServiceCatalogPrivateApplicationPackageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference">ServiceCatalogPrivateApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logoFileBase64EncodedInput">logo_file_base64_encoded_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.longDescriptionInput">long_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageDetailsInput">package_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.shortDescriptionInput">short_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logoFileBase64Encoded">logo_file_base64_encoded</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.longDescription">long_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.shortDescription">short_description</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `logo`<sup>Required</sup> <a name="logo" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logo"></a>

```python
logo: ServiceCatalogPrivateApplicationLogoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList">ServiceCatalogPrivateApplicationLogoList</a>

---

##### `package_details`<sup>Required</sup> <a name="package_details" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageDetails"></a>

```python
package_details: ServiceCatalogPrivateApplicationPackageDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference">ServiceCatalogPrivateApplicationPackageDetailsOutputReference</a>

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeouts"></a>

```python
timeouts: ServiceCatalogPrivateApplicationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference">ServiceCatalogPrivateApplicationTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logo_file_base64_encoded_input`<sup>Optional</sup> <a name="logo_file_base64_encoded_input" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logoFileBase64EncodedInput"></a>

```python
logo_file_base64_encoded_input: str
```

- *Type:* str

---

##### `long_description_input`<sup>Optional</sup> <a name="long_description_input" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.longDescriptionInput"></a>

```python
long_description_input: str
```

- *Type:* str

---

##### `package_details_input`<sup>Optional</sup> <a name="package_details_input" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageDetailsInput"></a>

```python
package_details_input: ServiceCatalogPrivateApplicationPackageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a>

---

##### `short_description_input`<sup>Optional</sup> <a name="short_description_input" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.shortDescriptionInput"></a>

```python
short_description_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServiceCatalogPrivateApplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logo_file_base64_encoded`<sup>Required</sup> <a name="logo_file_base64_encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logoFileBase64Encoded"></a>

```python
logo_file_base64_encoded: str
```

- *Type:* str

---

##### `long_description`<sup>Required</sup> <a name="long_description" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.longDescription"></a>

```python
long_description: str
```

- *Type:* str

---

##### `short_description`<sup>Required</sup> <a name="short_description" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.shortDescription"></a>

```python
short_description: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceCatalogPrivateApplicationConfig <a name="ServiceCatalogPrivateApplicationConfig" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_catalog_private_application

serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  package_details: ServiceCatalogPrivateApplicationPackageDetails,
  short_description: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  logo_file_base64_encoded: str = None,
  long_description: str = None,
  timeouts: ServiceCatalogPrivateApplicationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#compartment_id ServiceCatalogPrivateApplication#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#display_name ServiceCatalogPrivateApplication#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.packageDetails">package_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a></code> | package_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.shortDescription">short_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#short_description ServiceCatalogPrivateApplication#short_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#defined_tags ServiceCatalogPrivateApplication#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#freeform_tags ServiceCatalogPrivateApplication#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#id ServiceCatalogPrivateApplication#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.logoFileBase64Encoded">logo_file_base64_encoded</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#logo_file_base64encoded ServiceCatalogPrivateApplication#logo_file_base64encoded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.longDescription">long_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#long_description ServiceCatalogPrivateApplication#long_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#compartment_id ServiceCatalogPrivateApplication#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#display_name ServiceCatalogPrivateApplication#display_name}.

---

##### `package_details`<sup>Required</sup> <a name="package_details" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.packageDetails"></a>

```python
package_details: ServiceCatalogPrivateApplicationPackageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a>

package_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#package_details ServiceCatalogPrivateApplication#package_details}

---

##### `short_description`<sup>Required</sup> <a name="short_description" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.shortDescription"></a>

```python
short_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#short_description ServiceCatalogPrivateApplication#short_description}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#defined_tags ServiceCatalogPrivateApplication#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#freeform_tags ServiceCatalogPrivateApplication#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#id ServiceCatalogPrivateApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo_file_base64_encoded`<sup>Optional</sup> <a name="logo_file_base64_encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.logoFileBase64Encoded"></a>

```python
logo_file_base64_encoded: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#logo_file_base64encoded ServiceCatalogPrivateApplication#logo_file_base64encoded}.

---

##### `long_description`<sup>Optional</sup> <a name="long_description" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.longDescription"></a>

```python
long_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#long_description ServiceCatalogPrivateApplication#long_description}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.timeouts"></a>

```python
timeouts: ServiceCatalogPrivateApplicationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#timeouts ServiceCatalogPrivateApplication#timeouts}

---

### ServiceCatalogPrivateApplicationLogo <a name="ServiceCatalogPrivateApplicationLogo" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_catalog_private_application

serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogo()
```


### ServiceCatalogPrivateApplicationPackageDetails <a name="ServiceCatalogPrivateApplicationPackageDetails" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_catalog_private_application

serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails(
  package_type: str,
  version: str,
  zip_file_base64_encoded: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.packageType">package_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#package_type ServiceCatalogPrivateApplication#package_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#version ServiceCatalogPrivateApplication#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.zipFileBase64Encoded">zip_file_base64_encoded</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#zip_file_base64encoded ServiceCatalogPrivateApplication#zip_file_base64encoded}. |

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#package_type ServiceCatalogPrivateApplication#package_type}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#version ServiceCatalogPrivateApplication#version}.

---

##### `zip_file_base64_encoded`<sup>Optional</sup> <a name="zip_file_base64_encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.zipFileBase64Encoded"></a>

```python
zip_file_base64_encoded: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#zip_file_base64encoded ServiceCatalogPrivateApplication#zip_file_base64encoded}.

---

### ServiceCatalogPrivateApplicationTimeouts <a name="ServiceCatalogPrivateApplicationTimeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_catalog_private_application

serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#create ServiceCatalogPrivateApplication#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#delete ServiceCatalogPrivateApplication#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#update ServiceCatalogPrivateApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#create ServiceCatalogPrivateApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#delete ServiceCatalogPrivateApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#update ServiceCatalogPrivateApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceCatalogPrivateApplicationLogoList <a name="ServiceCatalogPrivateApplicationLogoList" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_catalog_private_application

serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceCatalogPrivateApplicationLogoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ServiceCatalogPrivateApplicationLogoOutputReference <a name="ServiceCatalogPrivateApplicationLogoOutputReference" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_catalog_private_application

serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.contentUrl">content_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogo">ServiceCatalogPrivateApplicationLogo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_url`<sup>Required</sup> <a name="content_url" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.contentUrl"></a>

```python
content_url: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.internalValue"></a>

```python
internal_value: ServiceCatalogPrivateApplicationLogo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogo">ServiceCatalogPrivateApplicationLogo</a>

---


### ServiceCatalogPrivateApplicationPackageDetailsOutputReference <a name="ServiceCatalogPrivateApplicationPackageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_catalog_private_application

serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resetZipFileBase64Encoded">reset_zip_file_base64_encoded</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_zip_file_base64_encoded` <a name="reset_zip_file_base64_encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resetZipFileBase64Encoded"></a>

```python
def reset_zip_file_base64_encoded() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageTypeInput">package_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64EncodedInput">zip_file_base64_encoded_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64Encoded">zip_file_base64_encoded</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `package_type_input`<sup>Optional</sup> <a name="package_type_input" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageTypeInput"></a>

```python
package_type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `zip_file_base64_encoded_input`<sup>Optional</sup> <a name="zip_file_base64_encoded_input" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64EncodedInput"></a>

```python
zip_file_base64_encoded_input: str
```

- *Type:* str

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `zip_file_base64_encoded`<sup>Required</sup> <a name="zip_file_base64_encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64Encoded"></a>

```python
zip_file_base64_encoded: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ServiceCatalogPrivateApplicationPackageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a>

---


### ServiceCatalogPrivateApplicationTimeoutsOutputReference <a name="ServiceCatalogPrivateApplicationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_catalog_private_application

serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceCatalogPrivateApplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a>]

---



