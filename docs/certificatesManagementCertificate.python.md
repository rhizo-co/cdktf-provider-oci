# `certificatesManagementCertificate` Submodule <a name="`certificatesManagementCertificate` Submodule" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatesManagementCertificate <a name="CertificatesManagementCertificate" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate oci_certificates_management_certificate}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_config: CertificatesManagementCertificateCertificateConfig,
  compartment_id: str,
  name: str,
  certificate_rules: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateCertificateRules]] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: CertificatesManagementCertificateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.certificateConfig">certificate_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a></code> | certificate_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#compartment_id CertificatesManagementCertificate#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#name CertificatesManagementCertificate#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.certificateRules">certificate_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>]]</code> | certificate_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#defined_tags CertificatesManagementCertificate#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#description CertificatesManagementCertificate#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#freeform_tags CertificatesManagementCertificate#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#id CertificatesManagementCertificate#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_config`<sup>Required</sup> <a name="certificate_config" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.certificateConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a>

certificate_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_config CertificatesManagementCertificate#certificate_config}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#compartment_id CertificatesManagementCertificate#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#name CertificatesManagementCertificate#name}.

---

##### `certificate_rules`<sup>Optional</sup> <a name="certificate_rules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.certificateRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>]]

certificate_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_rules CertificatesManagementCertificate#certificate_rules}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#defined_tags CertificatesManagementCertificate#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#description CertificatesManagementCertificate#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#freeform_tags CertificatesManagementCertificate#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#id CertificatesManagementCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#timeouts CertificatesManagementCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig">put_certificate_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateRules">put_certificate_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetCertificateRules">reset_certificate_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_certificate_config` <a name="put_certificate_config" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig"></a>

```python
def put_certificate_config(
  config_type: str,
  certificate_profile_type: str = None,
  csr_pem: str = None,
  issuer_certificate_authority_id: str = None,
  key_algorithm: str = None,
  signature_algorithm: str = None,
  subject: CertificatesManagementCertificateCertificateConfigSubject = None,
  subject_alternative_names: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames]] = None,
  validity: CertificatesManagementCertificateCertificateConfigValidity = None,
  version_name: str = None
) -> None
```

###### `config_type`<sup>Required</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig.parameter.configType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#config_type CertificatesManagementCertificate#config_type}.

---

###### `certificate_profile_type`<sup>Optional</sup> <a name="certificate_profile_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig.parameter.certificateProfileType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_profile_type CertificatesManagementCertificate#certificate_profile_type}.

---

###### `csr_pem`<sup>Optional</sup> <a name="csr_pem" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig.parameter.csrPem"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#csr_pem CertificatesManagementCertificate#csr_pem}.

---

###### `issuer_certificate_authority_id`<sup>Optional</sup> <a name="issuer_certificate_authority_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig.parameter.issuerCertificateAuthorityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#issuer_certificate_authority_id CertificatesManagementCertificate#issuer_certificate_authority_id}.

---

###### `key_algorithm`<sup>Optional</sup> <a name="key_algorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig.parameter.keyAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#key_algorithm CertificatesManagementCertificate#key_algorithm}.

---

###### `signature_algorithm`<sup>Optional</sup> <a name="signature_algorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig.parameter.signatureAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#signature_algorithm CertificatesManagementCertificate#signature_algorithm}.

---

###### `subject`<sup>Optional</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig.parameter.subject"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#subject CertificatesManagementCertificate#subject}

---

###### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig.parameter.subjectAlternativeNames"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>]]

subject_alternative_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#subject_alternative_names CertificatesManagementCertificate#subject_alternative_names}

---

###### `validity`<sup>Optional</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig.parameter.validity"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a>

validity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#validity CertificatesManagementCertificate#validity}

---

###### `version_name`<sup>Optional</sup> <a name="version_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig.parameter.versionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#version_name CertificatesManagementCertificate#version_name}.

---

##### `put_certificate_rules` <a name="put_certificate_rules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateRules"></a>

```python
def put_certificate_rules(
  value: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateCertificateRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#create CertificatesManagementCertificate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#delete CertificatesManagementCertificate#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#update CertificatesManagementCertificate#update}.

---

##### `reset_certificate_rules` <a name="reset_certificate_rules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetCertificateRules"></a>

```python
def reset_certificate_rules() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CertificatesManagementCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CertificatesManagementCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CertificatesManagementCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CertificatesManagementCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CertificatesManagementCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateConfig">certificate_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference">CertificatesManagementCertificateCertificateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateProfileType">certificate_profile_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRevocationListDetails">certificate_revocation_list_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList">CertificatesManagementCertificateCertificateRevocationListDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRules">certificate_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList">CertificatesManagementCertificateCertificateRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.configType">config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.currentVersion">current_version</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList">CertificatesManagementCertificateCurrentVersionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.issuerCertificateAuthorityId">issuer_certificate_authority_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.signatureAlgorithm">signature_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList">CertificatesManagementCertificateSubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference">CertificatesManagementCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateConfigInput">certificate_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRulesInput">certificate_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_config`<sup>Required</sup> <a name="certificate_config" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateConfig"></a>

```python
certificate_config: CertificatesManagementCertificateCertificateConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference">CertificatesManagementCertificateCertificateConfigOutputReference</a>

---

##### `certificate_profile_type`<sup>Required</sup> <a name="certificate_profile_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateProfileType"></a>

```python
certificate_profile_type: str
```

- *Type:* str

---

##### `certificate_revocation_list_details`<sup>Required</sup> <a name="certificate_revocation_list_details" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRevocationListDetails"></a>

```python
certificate_revocation_list_details: CertificatesManagementCertificateCertificateRevocationListDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList">CertificatesManagementCertificateCertificateRevocationListDetailsList</a>

---

##### `certificate_rules`<sup>Required</sup> <a name="certificate_rules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRules"></a>

```python
certificate_rules: CertificatesManagementCertificateCertificateRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList">CertificatesManagementCertificateCertificateRulesList</a>

---

##### `config_type`<sup>Required</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.configType"></a>

```python
config_type: str
```

- *Type:* str

---

##### `current_version`<sup>Required</sup> <a name="current_version" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.currentVersion"></a>

```python
current_version: CertificatesManagementCertificateCurrentVersionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList">CertificatesManagementCertificateCurrentVersionList</a>

---

##### `issuer_certificate_authority_id`<sup>Required</sup> <a name="issuer_certificate_authority_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.issuerCertificateAuthorityId"></a>

```python
issuer_certificate_authority_id: str
```

- *Type:* str

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `signature_algorithm`<sup>Required</sup> <a name="signature_algorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.signatureAlgorithm"></a>

```python
signature_algorithm: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.subject"></a>

```python
subject: CertificatesManagementCertificateSubjectList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList">CertificatesManagementCertificateSubjectList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_of_deletion`<sup>Required</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeouts"></a>

```python
timeouts: CertificatesManagementCertificateTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference">CertificatesManagementCertificateTimeoutsOutputReference</a>

---

##### `certificate_config_input`<sup>Optional</sup> <a name="certificate_config_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateConfigInput"></a>

```python
certificate_config_input: CertificatesManagementCertificateCertificateConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a>

---

##### `certificate_rules_input`<sup>Optional</sup> <a name="certificate_rules_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRulesInput"></a>

```python
certificate_rules_input: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateCertificateRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>]]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CertificatesManagementCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatesManagementCertificateCertificateConfig <a name="CertificatesManagementCertificateCertificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig(
  config_type: str,
  certificate_profile_type: str = None,
  csr_pem: str = None,
  issuer_certificate_authority_id: str = None,
  key_algorithm: str = None,
  signature_algorithm: str = None,
  subject: CertificatesManagementCertificateCertificateConfigSubject = None,
  subject_alternative_names: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames]] = None,
  validity: CertificatesManagementCertificateCertificateConfigValidity = None,
  version_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.configType">config_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#config_type CertificatesManagementCertificate#config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.certificateProfileType">certificate_profile_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_profile_type CertificatesManagementCertificate#certificate_profile_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.csrPem">csr_pem</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#csr_pem CertificatesManagementCertificate#csr_pem}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.issuerCertificateAuthorityId">issuer_certificate_authority_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#issuer_certificate_authority_id CertificatesManagementCertificate#issuer_certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#key_algorithm CertificatesManagementCertificate#key_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.signatureAlgorithm">signature_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#signature_algorithm CertificatesManagementCertificate#signature_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a></code> | subject block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>]]</code> | subject_alternative_names block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a></code> | validity block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.versionName">version_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#version_name CertificatesManagementCertificate#version_name}. |

---

##### `config_type`<sup>Required</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.configType"></a>

```python
config_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#config_type CertificatesManagementCertificate#config_type}.

---

##### `certificate_profile_type`<sup>Optional</sup> <a name="certificate_profile_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.certificateProfileType"></a>

```python
certificate_profile_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_profile_type CertificatesManagementCertificate#certificate_profile_type}.

---

##### `csr_pem`<sup>Optional</sup> <a name="csr_pem" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.csrPem"></a>

```python
csr_pem: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#csr_pem CertificatesManagementCertificate#csr_pem}.

---

##### `issuer_certificate_authority_id`<sup>Optional</sup> <a name="issuer_certificate_authority_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.issuerCertificateAuthorityId"></a>

```python
issuer_certificate_authority_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#issuer_certificate_authority_id CertificatesManagementCertificate#issuer_certificate_authority_id}.

---

##### `key_algorithm`<sup>Optional</sup> <a name="key_algorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#key_algorithm CertificatesManagementCertificate#key_algorithm}.

---

##### `signature_algorithm`<sup>Optional</sup> <a name="signature_algorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.signatureAlgorithm"></a>

```python
signature_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#signature_algorithm CertificatesManagementCertificate#signature_algorithm}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.subject"></a>

```python
subject: CertificatesManagementCertificateCertificateConfigSubject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#subject CertificatesManagementCertificate#subject}

---

##### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>]]

subject_alternative_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#subject_alternative_names CertificatesManagementCertificate#subject_alternative_names}

---

##### `validity`<sup>Optional</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.validity"></a>

```python
validity: CertificatesManagementCertificateCertificateConfigValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a>

validity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#validity CertificatesManagementCertificate#validity}

---

##### `version_name`<sup>Optional</sup> <a name="version_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#version_name CertificatesManagementCertificate#version_name}.

---

### CertificatesManagementCertificateCertificateConfigSubject <a name="CertificatesManagementCertificateCertificateConfigSubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject(
  common_name: str,
  country: str = None,
  distinguished_name_qualifier: str = None,
  domain_component: str = None,
  generation_qualifier: str = None,
  given_name: str = None,
  initials: str = None,
  locality_name: str = None,
  organization: str = None,
  organizational_unit: str = None,
  pseudonym: str = None,
  serial_number: str = None,
  state_or_province_name: str = None,
  street: str = None,
  surname: str = None,
  title: str = None,
  user_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.commonName">common_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#common_name CertificatesManagementCertificate#common_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.country">country</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#country CertificatesManagementCertificate#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#distinguished_name_qualifier CertificatesManagementCertificate#distinguished_name_qualifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.domainComponent">domain_component</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#domain_component CertificatesManagementCertificate#domain_component}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#generation_qualifier CertificatesManagementCertificate#generation_qualifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.givenName">given_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#given_name CertificatesManagementCertificate#given_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.initials">initials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#initials CertificatesManagementCertificate#initials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.localityName">locality_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#locality_name CertificatesManagementCertificate#locality_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organization CertificatesManagementCertificate#organization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organizational_unit CertificatesManagementCertificate#organizational_unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.pseudonym">pseudonym</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#pseudonym CertificatesManagementCertificate#pseudonym}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.serialNumber">serial_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#serial_number CertificatesManagementCertificate#serial_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.stateOrProvinceName">state_or_province_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#state_or_province_name CertificatesManagementCertificate#state_or_province_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.street">street</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#street CertificatesManagementCertificate#street}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.surname">surname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#surname CertificatesManagementCertificate#surname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#title CertificatesManagementCertificate#title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#user_id CertificatesManagementCertificate#user_id}. |

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#common_name CertificatesManagementCertificate#common_name}.

---

##### `country`<sup>Optional</sup> <a name="country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.country"></a>

```python
country: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#country CertificatesManagementCertificate#country}.

---

##### `distinguished_name_qualifier`<sup>Optional</sup> <a name="distinguished_name_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#distinguished_name_qualifier CertificatesManagementCertificate#distinguished_name_qualifier}.

---

##### `domain_component`<sup>Optional</sup> <a name="domain_component" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.domainComponent"></a>

```python
domain_component: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#domain_component CertificatesManagementCertificate#domain_component}.

---

##### `generation_qualifier`<sup>Optional</sup> <a name="generation_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#generation_qualifier CertificatesManagementCertificate#generation_qualifier}.

---

##### `given_name`<sup>Optional</sup> <a name="given_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#given_name CertificatesManagementCertificate#given_name}.

---

##### `initials`<sup>Optional</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.initials"></a>

```python
initials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#initials CertificatesManagementCertificate#initials}.

---

##### `locality_name`<sup>Optional</sup> <a name="locality_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.localityName"></a>

```python
locality_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#locality_name CertificatesManagementCertificate#locality_name}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.organization"></a>

```python
organization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organization CertificatesManagementCertificate#organization}.

---

##### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organizational_unit CertificatesManagementCertificate#organizational_unit}.

---

##### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#pseudonym CertificatesManagementCertificate#pseudonym}.

---

##### `serial_number`<sup>Optional</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#serial_number CertificatesManagementCertificate#serial_number}.

---

##### `state_or_province_name`<sup>Optional</sup> <a name="state_or_province_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.stateOrProvinceName"></a>

```python
state_or_province_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#state_or_province_name CertificatesManagementCertificate#state_or_province_name}.

---

##### `street`<sup>Optional</sup> <a name="street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.street"></a>

```python
street: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#street CertificatesManagementCertificate#street}.

---

##### `surname`<sup>Optional</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.surname"></a>

```python
surname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#surname CertificatesManagementCertificate#surname}.

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#title CertificatesManagementCertificate#title}.

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#user_id CertificatesManagementCertificate#user_id}.

---

### CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames <a name="CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames(
  type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#type CertificatesManagementCertificate#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#value CertificatesManagementCertificate#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#type CertificatesManagementCertificate#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#value CertificatesManagementCertificate#value}.

---

### CertificatesManagementCertificateCertificateConfigValidity <a name="CertificatesManagementCertificateCertificateConfigValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity(
  time_of_validity_not_after: str,
  time_of_validity_not_before: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.property.timeOfValidityNotAfter">time_of_validity_not_after</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_after CertificatesManagementCertificate#time_of_validity_not_after}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.property.timeOfValidityNotBefore">time_of_validity_not_before</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_before CertificatesManagementCertificate#time_of_validity_not_before}. |

---

##### `time_of_validity_not_after`<sup>Required</sup> <a name="time_of_validity_not_after" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.property.timeOfValidityNotAfter"></a>

```python
time_of_validity_not_after: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_after CertificatesManagementCertificate#time_of_validity_not_after}.

---

##### `time_of_validity_not_before`<sup>Optional</sup> <a name="time_of_validity_not_before" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.property.timeOfValidityNotBefore"></a>

```python
time_of_validity_not_before: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_before CertificatesManagementCertificate#time_of_validity_not_before}.

---

### CertificatesManagementCertificateCertificateRevocationListDetails <a name="CertificatesManagementCertificateCertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails()
```


### CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig <a name="CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig()
```


### CertificatesManagementCertificateCertificateRules <a name="CertificatesManagementCertificateCertificateRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules(
  advance_renewal_period: str,
  renewal_interval: str,
  rule_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.advanceRenewalPeriod">advance_renewal_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#advance_renewal_period CertificatesManagementCertificate#advance_renewal_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.renewalInterval">renewal_interval</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#renewal_interval CertificatesManagementCertificate#renewal_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.ruleType">rule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#rule_type CertificatesManagementCertificate#rule_type}. |

---

##### `advance_renewal_period`<sup>Required</sup> <a name="advance_renewal_period" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.advanceRenewalPeriod"></a>

```python
advance_renewal_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#advance_renewal_period CertificatesManagementCertificate#advance_renewal_period}.

---

##### `renewal_interval`<sup>Required</sup> <a name="renewal_interval" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.renewalInterval"></a>

```python
renewal_interval: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#renewal_interval CertificatesManagementCertificate#renewal_interval}.

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#rule_type CertificatesManagementCertificate#rule_type}.

---

### CertificatesManagementCertificateConfig <a name="CertificatesManagementCertificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_config: CertificatesManagementCertificateCertificateConfig,
  compartment_id: str,
  name: str,
  certificate_rules: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateCertificateRules]] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: CertificatesManagementCertificateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.certificateConfig">certificate_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a></code> | certificate_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#compartment_id CertificatesManagementCertificate#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#name CertificatesManagementCertificate#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.certificateRules">certificate_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>]]</code> | certificate_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#defined_tags CertificatesManagementCertificate#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#description CertificatesManagementCertificate#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#freeform_tags CertificatesManagementCertificate#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#id CertificatesManagementCertificate#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_config`<sup>Required</sup> <a name="certificate_config" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.certificateConfig"></a>

```python
certificate_config: CertificatesManagementCertificateCertificateConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a>

certificate_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_config CertificatesManagementCertificate#certificate_config}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#compartment_id CertificatesManagementCertificate#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#name CertificatesManagementCertificate#name}.

---

##### `certificate_rules`<sup>Optional</sup> <a name="certificate_rules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.certificateRules"></a>

```python
certificate_rules: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateCertificateRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>]]

certificate_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_rules CertificatesManagementCertificate#certificate_rules}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#defined_tags CertificatesManagementCertificate#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#description CertificatesManagementCertificate#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#freeform_tags CertificatesManagementCertificate#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#id CertificatesManagementCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.timeouts"></a>

```python
timeouts: CertificatesManagementCertificateTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#timeouts CertificatesManagementCertificate#timeouts}

---

### CertificatesManagementCertificateCurrentVersion <a name="CertificatesManagementCertificateCurrentVersion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion()
```


### CertificatesManagementCertificateCurrentVersionRevocationStatus <a name="CertificatesManagementCertificateCurrentVersionRevocationStatus" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus()
```


### CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames <a name="CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames()
```


### CertificatesManagementCertificateCurrentVersionValidity <a name="CertificatesManagementCertificateCurrentVersionValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity()
```


### CertificatesManagementCertificateSubject <a name="CertificatesManagementCertificateSubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubject.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateSubject()
```


### CertificatesManagementCertificateTimeouts <a name="CertificatesManagementCertificateTimeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#create CertificatesManagementCertificate#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#delete CertificatesManagementCertificate#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#update CertificatesManagementCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#create CertificatesManagementCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#delete CertificatesManagementCertificate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#update CertificatesManagementCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatesManagementCertificateCertificateConfigOutputReference <a name="CertificatesManagementCertificateCertificateConfigOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject">put_subject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubjectAlternativeNames">put_subject_alternative_names</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putValidity">put_validity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetCertificateProfileType">reset_certificate_profile_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetCsrPem">reset_csr_pem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetIssuerCertificateAuthorityId">reset_issuer_certificate_authority_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetKeyAlgorithm">reset_key_algorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSignatureAlgorithm">reset_signature_algorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSubject">reset_subject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSubjectAlternativeNames">reset_subject_alternative_names</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetValidity">reset_validity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetVersionName">reset_version_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_subject` <a name="put_subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject"></a>

```python
def put_subject(
  common_name: str,
  country: str = None,
  distinguished_name_qualifier: str = None,
  domain_component: str = None,
  generation_qualifier: str = None,
  given_name: str = None,
  initials: str = None,
  locality_name: str = None,
  organization: str = None,
  organizational_unit: str = None,
  pseudonym: str = None,
  serial_number: str = None,
  state_or_province_name: str = None,
  street: str = None,
  surname: str = None,
  title: str = None,
  user_id: str = None
) -> None
```

###### `common_name`<sup>Required</sup> <a name="common_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.commonName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#common_name CertificatesManagementCertificate#common_name}.

---

###### `country`<sup>Optional</sup> <a name="country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.country"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#country CertificatesManagementCertificate#country}.

---

###### `distinguished_name_qualifier`<sup>Optional</sup> <a name="distinguished_name_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.distinguishedNameQualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#distinguished_name_qualifier CertificatesManagementCertificate#distinguished_name_qualifier}.

---

###### `domain_component`<sup>Optional</sup> <a name="domain_component" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.domainComponent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#domain_component CertificatesManagementCertificate#domain_component}.

---

###### `generation_qualifier`<sup>Optional</sup> <a name="generation_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.generationQualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#generation_qualifier CertificatesManagementCertificate#generation_qualifier}.

---

###### `given_name`<sup>Optional</sup> <a name="given_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.givenName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#given_name CertificatesManagementCertificate#given_name}.

---

###### `initials`<sup>Optional</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.initials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#initials CertificatesManagementCertificate#initials}.

---

###### `locality_name`<sup>Optional</sup> <a name="locality_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.localityName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#locality_name CertificatesManagementCertificate#locality_name}.

---

###### `organization`<sup>Optional</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.organization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organization CertificatesManagementCertificate#organization}.

---

###### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.organizationalUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organizational_unit CertificatesManagementCertificate#organizational_unit}.

---

###### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.pseudonym"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#pseudonym CertificatesManagementCertificate#pseudonym}.

---

###### `serial_number`<sup>Optional</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.serialNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#serial_number CertificatesManagementCertificate#serial_number}.

---

###### `state_or_province_name`<sup>Optional</sup> <a name="state_or_province_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.stateOrProvinceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#state_or_province_name CertificatesManagementCertificate#state_or_province_name}.

---

###### `street`<sup>Optional</sup> <a name="street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.street"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#street CertificatesManagementCertificate#street}.

---

###### `surname`<sup>Optional</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.surname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#surname CertificatesManagementCertificate#surname}.

---

###### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#title CertificatesManagementCertificate#title}.

---

###### `user_id`<sup>Optional</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.userId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#user_id CertificatesManagementCertificate#user_id}.

---

##### `put_subject_alternative_names` <a name="put_subject_alternative_names" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubjectAlternativeNames"></a>

```python
def put_subject_alternative_names(
  value: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubjectAlternativeNames.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>]]

---

##### `put_validity` <a name="put_validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putValidity"></a>

```python
def put_validity(
  time_of_validity_not_after: str,
  time_of_validity_not_before: str = None
) -> None
```

###### `time_of_validity_not_after`<sup>Required</sup> <a name="time_of_validity_not_after" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putValidity.parameter.timeOfValidityNotAfter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_after CertificatesManagementCertificate#time_of_validity_not_after}.

---

###### `time_of_validity_not_before`<sup>Optional</sup> <a name="time_of_validity_not_before" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putValidity.parameter.timeOfValidityNotBefore"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_before CertificatesManagementCertificate#time_of_validity_not_before}.

---

##### `reset_certificate_profile_type` <a name="reset_certificate_profile_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetCertificateProfileType"></a>

```python
def reset_certificate_profile_type() -> None
```

##### `reset_csr_pem` <a name="reset_csr_pem" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetCsrPem"></a>

```python
def reset_csr_pem() -> None
```

##### `reset_issuer_certificate_authority_id` <a name="reset_issuer_certificate_authority_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetIssuerCertificateAuthorityId"></a>

```python
def reset_issuer_certificate_authority_id() -> None
```

##### `reset_key_algorithm` <a name="reset_key_algorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetKeyAlgorithm"></a>

```python
def reset_key_algorithm() -> None
```

##### `reset_signature_algorithm` <a name="reset_signature_algorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSignatureAlgorithm"></a>

```python
def reset_signature_algorithm() -> None
```

##### `reset_subject` <a name="reset_subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSubject"></a>

```python
def reset_subject() -> None
```

##### `reset_subject_alternative_names` <a name="reset_subject_alternative_names" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSubjectAlternativeNames"></a>

```python
def reset_subject_alternative_names() -> None
```

##### `reset_validity` <a name="reset_validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetValidity"></a>

```python
def reset_validity() -> None
```

##### `reset_version_name` <a name="reset_version_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetVersionName"></a>

```python
def reset_version_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference">CertificatesManagementCertificateCertificateConfigSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference">CertificatesManagementCertificateCertificateConfigValidityOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileTypeInput">certificate_profile_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.configTypeInput">config_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.csrPemInput">csr_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityIdInput">issuer_certificate_authority_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithmInput">key_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithmInput">signature_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNamesInput">subject_alternative_names_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectInput">subject_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.validityInput">validity_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.versionNameInput">version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileType">certificate_profile_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.configType">config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.csrPem">csr_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityId">issuer_certificate_authority_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithm">signature_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subject"></a>

```python
subject: CertificatesManagementCertificateCertificateConfigSubjectOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference">CertificatesManagementCertificateCertificateConfigSubjectOutputReference</a>

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList</a>

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.validity"></a>

```python
validity: CertificatesManagementCertificateCertificateConfigValidityOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference">CertificatesManagementCertificateCertificateConfigValidityOutputReference</a>

---

##### `certificate_profile_type_input`<sup>Optional</sup> <a name="certificate_profile_type_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileTypeInput"></a>

```python
certificate_profile_type_input: str
```

- *Type:* str

---

##### `config_type_input`<sup>Optional</sup> <a name="config_type_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.configTypeInput"></a>

```python
config_type_input: str
```

- *Type:* str

---

##### `csr_pem_input`<sup>Optional</sup> <a name="csr_pem_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.csrPemInput"></a>

```python
csr_pem_input: str
```

- *Type:* str

---

##### `issuer_certificate_authority_id_input`<sup>Optional</sup> <a name="issuer_certificate_authority_id_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityIdInput"></a>

```python
issuer_certificate_authority_id_input: str
```

- *Type:* str

---

##### `key_algorithm_input`<sup>Optional</sup> <a name="key_algorithm_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithmInput"></a>

```python
key_algorithm_input: str
```

- *Type:* str

---

##### `signature_algorithm_input`<sup>Optional</sup> <a name="signature_algorithm_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithmInput"></a>

```python
signature_algorithm_input: str
```

- *Type:* str

---

##### `subject_alternative_names_input`<sup>Optional</sup> <a name="subject_alternative_names_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNamesInput"></a>

```python
subject_alternative_names_input: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>]]

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectInput"></a>

```python
subject_input: CertificatesManagementCertificateCertificateConfigSubject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a>

---

##### `validity_input`<sup>Optional</sup> <a name="validity_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.validityInput"></a>

```python
validity_input: CertificatesManagementCertificateCertificateConfigValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a>

---

##### `version_name_input`<sup>Optional</sup> <a name="version_name_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.versionNameInput"></a>

```python
version_name_input: str
```

- *Type:* str

---

##### `certificate_profile_type`<sup>Required</sup> <a name="certificate_profile_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileType"></a>

```python
certificate_profile_type: str
```

- *Type:* str

---

##### `config_type`<sup>Required</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.configType"></a>

```python
config_type: str
```

- *Type:* str

---

##### `csr_pem`<sup>Required</sup> <a name="csr_pem" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.csrPem"></a>

```python
csr_pem: str
```

- *Type:* str

---

##### `issuer_certificate_authority_id`<sup>Required</sup> <a name="issuer_certificate_authority_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityId"></a>

```python
issuer_certificate_authority_id: str
```

- *Type:* str

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

---

##### `signature_algorithm`<sup>Required</sup> <a name="signature_algorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithm"></a>

```python
signature_algorithm: str
```

- *Type:* str

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateCertificateConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a>

---


### CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList <a name="CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>]]

---


### CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference <a name="CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>]

---


### CertificatesManagementCertificateCertificateConfigSubjectOutputReference <a name="CertificatesManagementCertificateCertificateConfigSubjectOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetDistinguishedNameQualifier">reset_distinguished_name_qualifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetDomainComponent">reset_domain_component</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetGenerationQualifier">reset_generation_qualifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetGivenName">reset_given_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetInitials">reset_initials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetLocalityName">reset_locality_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetOrganizationalUnit">reset_organizational_unit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetPseudonym">reset_pseudonym</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetSerialNumber">reset_serial_number</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetStateOrProvinceName">reset_state_or_province_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetStreet">reset_street</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetSurname">reset_surname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_country` <a name="reset_country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_distinguished_name_qualifier` <a name="reset_distinguished_name_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetDistinguishedNameQualifier"></a>

```python
def reset_distinguished_name_qualifier() -> None
```

##### `reset_domain_component` <a name="reset_domain_component" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetDomainComponent"></a>

```python
def reset_domain_component() -> None
```

##### `reset_generation_qualifier` <a name="reset_generation_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetGenerationQualifier"></a>

```python
def reset_generation_qualifier() -> None
```

##### `reset_given_name` <a name="reset_given_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetGivenName"></a>

```python
def reset_given_name() -> None
```

##### `reset_initials` <a name="reset_initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetInitials"></a>

```python
def reset_initials() -> None
```

##### `reset_locality_name` <a name="reset_locality_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetLocalityName"></a>

```python
def reset_locality_name() -> None
```

##### `reset_organization` <a name="reset_organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_organizational_unit` <a name="reset_organizational_unit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetOrganizationalUnit"></a>

```python
def reset_organizational_unit() -> None
```

##### `reset_pseudonym` <a name="reset_pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetPseudonym"></a>

```python
def reset_pseudonym() -> None
```

##### `reset_serial_number` <a name="reset_serial_number" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetSerialNumber"></a>

```python
def reset_serial_number() -> None
```

##### `reset_state_or_province_name` <a name="reset_state_or_province_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetStateOrProvinceName"></a>

```python
def reset_state_or_province_name() -> None
```

##### `reset_street` <a name="reset_street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetStreet"></a>

```python
def reset_street() -> None
```

##### `reset_surname` <a name="reset_surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetSurname"></a>

```python
def reset_surname() -> None
```

##### `reset_title` <a name="reset_title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetUserId"></a>

```python
def reset_user_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifierInput">distinguished_name_qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponentInput">domain_component_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifierInput">generation_qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenNameInput">given_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initialsInput">initials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityNameInput">locality_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnitInput">organizational_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonymInput">pseudonym_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumberInput">serial_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceNameInput">state_or_province_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.streetInput">street_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surnameInput">surname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponent">domain_component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initials">initials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityName">locality_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceName">state_or_province_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.street">street</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surname">surname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `distinguished_name_qualifier_input`<sup>Optional</sup> <a name="distinguished_name_qualifier_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifierInput"></a>

```python
distinguished_name_qualifier_input: str
```

- *Type:* str

---

##### `domain_component_input`<sup>Optional</sup> <a name="domain_component_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponentInput"></a>

```python
domain_component_input: str
```

- *Type:* str

---

##### `generation_qualifier_input`<sup>Optional</sup> <a name="generation_qualifier_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifierInput"></a>

```python
generation_qualifier_input: str
```

- *Type:* str

---

##### `given_name_input`<sup>Optional</sup> <a name="given_name_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenNameInput"></a>

```python
given_name_input: str
```

- *Type:* str

---

##### `initials_input`<sup>Optional</sup> <a name="initials_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initialsInput"></a>

```python
initials_input: str
```

- *Type:* str

---

##### `locality_name_input`<sup>Optional</sup> <a name="locality_name_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityNameInput"></a>

```python
locality_name_input: str
```

- *Type:* str

---

##### `organizational_unit_input`<sup>Optional</sup> <a name="organizational_unit_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnitInput"></a>

```python
organizational_unit_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `pseudonym_input`<sup>Optional</sup> <a name="pseudonym_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonymInput"></a>

```python
pseudonym_input: str
```

- *Type:* str

---

##### `serial_number_input`<sup>Optional</sup> <a name="serial_number_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumberInput"></a>

```python
serial_number_input: str
```

- *Type:* str

---

##### `state_or_province_name_input`<sup>Optional</sup> <a name="state_or_province_name_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceNameInput"></a>

```python
state_or_province_name_input: str
```

- *Type:* str

---

##### `street_input`<sup>Optional</sup> <a name="street_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.streetInput"></a>

```python
street_input: str
```

- *Type:* str

---

##### `surname_input`<sup>Optional</sup> <a name="surname_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surnameInput"></a>

```python
surname_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `distinguished_name_qualifier`<sup>Required</sup> <a name="distinguished_name_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

---

##### `domain_component`<sup>Required</sup> <a name="domain_component" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponent"></a>

```python
domain_component: str
```

- *Type:* str

---

##### `generation_qualifier`<sup>Required</sup> <a name="generation_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `initials`<sup>Required</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initials"></a>

```python
initials: str
```

- *Type:* str

---

##### `locality_name`<sup>Required</sup> <a name="locality_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityName"></a>

```python
locality_name: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `state_or_province_name`<sup>Required</sup> <a name="state_or_province_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceName"></a>

```python
state_or_province_name: str
```

- *Type:* str

---

##### `street`<sup>Required</sup> <a name="street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.street"></a>

```python
street: str
```

- *Type:* str

---

##### `surname`<sup>Required</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surname"></a>

```python
surname: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateCertificateConfigSubject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a>

---


### CertificatesManagementCertificateCertificateConfigValidityOutputReference <a name="CertificatesManagementCertificateCertificateConfigValidityOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resetTimeOfValidityNotBefore">reset_time_of_validity_not_before</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_time_of_validity_not_before` <a name="reset_time_of_validity_not_before" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resetTimeOfValidityNotBefore"></a>

```python
def reset_time_of_validity_not_before() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfterInput">time_of_validity_not_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBeforeInput">time_of_validity_not_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfter">time_of_validity_not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBefore">time_of_validity_not_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_of_validity_not_after_input`<sup>Optional</sup> <a name="time_of_validity_not_after_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfterInput"></a>

```python
time_of_validity_not_after_input: str
```

- *Type:* str

---

##### `time_of_validity_not_before_input`<sup>Optional</sup> <a name="time_of_validity_not_before_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBeforeInput"></a>

```python
time_of_validity_not_before_input: str
```

- *Type:* str

---

##### `time_of_validity_not_after`<sup>Required</sup> <a name="time_of_validity_not_after" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfter"></a>

```python
time_of_validity_not_after: str
```

- *Type:* str

---

##### `time_of_validity_not_before`<sup>Required</sup> <a name="time_of_validity_not_before" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBefore"></a>

```python
time_of_validity_not_before: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateCertificateConfigValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a>

---


### CertificatesManagementCertificateCertificateRevocationListDetailsList <a name="CertificatesManagementCertificateCertificateRevocationListDetailsList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList <a name="CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference <a name="CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName">object_storage_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace">object_storage_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat">object_storage_object_name_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_storage_bucket_name`<sup>Required</sup> <a name="object_storage_bucket_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName"></a>

```python
object_storage_bucket_name: str
```

- *Type:* str

---

##### `object_storage_namespace`<sup>Required</sup> <a name="object_storage_namespace" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace"></a>

```python
object_storage_namespace: str
```

- *Type:* str

---

##### `object_storage_object_name_format`<sup>Required</sup> <a name="object_storage_object_name_format" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat"></a>

```python
object_storage_object_name_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig</a>

---


### CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference <a name="CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.customFormattedUrls">custom_formatted_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.objectStorageConfig">object_storage_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList">CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails">CertificatesManagementCertificateCertificateRevocationListDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_formatted_urls`<sup>Required</sup> <a name="custom_formatted_urls" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.customFormattedUrls"></a>

```python
custom_formatted_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_storage_config`<sup>Required</sup> <a name="object_storage_config" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.objectStorageConfig"></a>

```python
object_storage_config: CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList">CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateCertificateRevocationListDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails">CertificatesManagementCertificateCertificateRevocationListDetails</a>

---


### CertificatesManagementCertificateCertificateRulesList <a name="CertificatesManagementCertificateCertificateRulesList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatesManagementCertificateCertificateRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CertificatesManagementCertificateCertificateRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>]]

---


### CertificatesManagementCertificateCertificateRulesOutputReference <a name="CertificatesManagementCertificateCertificateRulesOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriodInput">advance_renewal_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.renewalIntervalInput">renewal_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.ruleTypeInput">rule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriod">advance_renewal_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.renewalInterval">renewal_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.ruleType">rule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advance_renewal_period_input`<sup>Optional</sup> <a name="advance_renewal_period_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriodInput"></a>

```python
advance_renewal_period_input: str
```

- *Type:* str

---

##### `renewal_interval_input`<sup>Optional</sup> <a name="renewal_interval_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.renewalIntervalInput"></a>

```python
renewal_interval_input: str
```

- *Type:* str

---

##### `rule_type_input`<sup>Optional</sup> <a name="rule_type_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.ruleTypeInput"></a>

```python
rule_type_input: str
```

- *Type:* str

---

##### `advance_renewal_period`<sup>Required</sup> <a name="advance_renewal_period" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriod"></a>

```python
advance_renewal_period: str
```

- *Type:* str

---

##### `renewal_interval`<sup>Required</sup> <a name="renewal_interval" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.renewalInterval"></a>

```python
renewal_interval: str
```

- *Type:* str

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CertificatesManagementCertificateCertificateRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>]

---


### CertificatesManagementCertificateCurrentVersionList <a name="CertificatesManagementCertificateCurrentVersionList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatesManagementCertificateCurrentVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CertificatesManagementCertificateCurrentVersionOutputReference <a name="CertificatesManagementCertificateCurrentVersionOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.issuerCaVersionNumber">issuer_ca_version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.revocationStatus">revocation_status</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList">CertificatesManagementCertificateCurrentVersionRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.stages">stages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList">CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList">CertificatesManagementCertificateCurrentVersionValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.versionNumber">version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion">CertificatesManagementCertificateCurrentVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `issuer_ca_version_number`<sup>Required</sup> <a name="issuer_ca_version_number" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.issuerCaVersionNumber"></a>

```python
issuer_ca_version_number: str
```

- *Type:* str

---

##### `revocation_status`<sup>Required</sup> <a name="revocation_status" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.revocationStatus"></a>

```python
revocation_status: CertificatesManagementCertificateCurrentVersionRevocationStatusList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList">CertificatesManagementCertificateCurrentVersionRevocationStatusList</a>

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.stages"></a>

```python
stages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList">CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_of_deletion`<sup>Required</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.validity"></a>

```python
validity: CertificatesManagementCertificateCurrentVersionValidityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList">CertificatesManagementCertificateCurrentVersionValidityList</a>

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.versionNumber"></a>

```python
version_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateCurrentVersion
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion">CertificatesManagementCertificateCurrentVersion</a>

---


### CertificatesManagementCertificateCurrentVersionRevocationStatusList <a name="CertificatesManagementCertificateCurrentVersionRevocationStatusList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference <a name="CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.revocationReason">revocation_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation">time_of_revocation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus">CertificatesManagementCertificateCurrentVersionRevocationStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revocation_reason`<sup>Required</sup> <a name="revocation_reason" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.revocationReason"></a>

```python
revocation_reason: str
```

- *Type:* str

---

##### `time_of_revocation`<sup>Required</sup> <a name="time_of_revocation" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation"></a>

```python
time_of_revocation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateCurrentVersionRevocationStatus
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus">CertificatesManagementCertificateCurrentVersionRevocationStatus</a>

---


### CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList <a name="CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference <a name="CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames">CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames">CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames</a>

---


### CertificatesManagementCertificateCurrentVersionValidityList <a name="CertificatesManagementCertificateCurrentVersionValidityList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatesManagementCertificateCurrentVersionValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CertificatesManagementCertificateCurrentVersionValidityOutputReference <a name="CertificatesManagementCertificateCurrentVersionValidityOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter">time_of_validity_not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore">time_of_validity_not_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity">CertificatesManagementCertificateCurrentVersionValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_of_validity_not_after`<sup>Required</sup> <a name="time_of_validity_not_after" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter"></a>

```python
time_of_validity_not_after: str
```

- *Type:* str

---

##### `time_of_validity_not_before`<sup>Required</sup> <a name="time_of_validity_not_before" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore"></a>

```python
time_of_validity_not_before: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateCurrentVersionValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity">CertificatesManagementCertificateCurrentVersionValidity</a>

---


### CertificatesManagementCertificateSubjectList <a name="CertificatesManagementCertificateSubjectList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateSubjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatesManagementCertificateSubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CertificatesManagementCertificateSubjectOutputReference <a name="CertificatesManagementCertificateSubjectOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.domainComponent">domain_component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.initials">initials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.localityName">locality_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.stateOrProvinceName">state_or_province_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.street">street</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.surname">surname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubject">CertificatesManagementCertificateSubject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `distinguished_name_qualifier`<sup>Required</sup> <a name="distinguished_name_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

---

##### `domain_component`<sup>Required</sup> <a name="domain_component" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.domainComponent"></a>

```python
domain_component: str
```

- *Type:* str

---

##### `generation_qualifier`<sup>Required</sup> <a name="generation_qualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `initials`<sup>Required</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.initials"></a>

```python
initials: str
```

- *Type:* str

---

##### `locality_name`<sup>Required</sup> <a name="locality_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.localityName"></a>

```python
locality_name: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `state_or_province_name`<sup>Required</sup> <a name="state_or_province_name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.stateOrProvinceName"></a>

```python
state_or_province_name: str
```

- *Type:* str

---

##### `street`<sup>Required</sup> <a name="street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.street"></a>

```python
street: str
```

- *Type:* str

---

##### `surname`<sup>Required</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.surname"></a>

```python
surname: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.internalValue"></a>

```python
internal_value: CertificatesManagementCertificateSubject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubject">CertificatesManagementCertificateSubject</a>

---


### CertificatesManagementCertificateTimeoutsOutputReference <a name="CertificatesManagementCertificateTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import certificates_management_certificate

certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CertificatesManagementCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a>]

---



