# `dataOciCoreVolumeAttachments` Submodule <a name="`dataOciCoreVolumeAttachments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVolumeAttachments <a name="DataOciCoreVolumeAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments oci_core_volume_attachments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_attachments

dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments(
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
  availability_domain: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVolumeAttachmentsFilter]] = None,
  id: str = None,
  instance_id: str = None,
  volume_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#compartment_id DataOciCoreVolumeAttachments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#availability_domain DataOciCoreVolumeAttachments#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#id DataOciCoreVolumeAttachments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#instance_id DataOciCoreVolumeAttachments#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.volumeId">volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#volume_id DataOciCoreVolumeAttachments#volume_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#compartment_id DataOciCoreVolumeAttachments#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#availability_domain DataOciCoreVolumeAttachments#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#filter DataOciCoreVolumeAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#id DataOciCoreVolumeAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#instance_id DataOciCoreVolumeAttachments#instance_id}.

---

##### `volume_id`<sup>Optional</sup> <a name="volume_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.volumeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#volume_id DataOciCoreVolumeAttachments#volume_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetVolumeId">reset_volume_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreVolumeAttachmentsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>]]

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_volume_id` <a name="reset_volume_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetVolumeId"></a>

```python
def reset_volume_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreVolumeAttachments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_attachments

dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_attachments

dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_attachments

dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_attachments

dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreVolumeAttachments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreVolumeAttachments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreVolumeAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVolumeAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList">DataOciCoreVolumeAttachmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.volumeAttachments">volume_attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList">DataOciCoreVolumeAttachmentsVolumeAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.filter"></a>

```python
filter: DataOciCoreVolumeAttachmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList">DataOciCoreVolumeAttachmentsFilterList</a>

---

##### `volume_attachments`<sup>Required</sup> <a name="volume_attachments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.volumeAttachments"></a>

```python
volume_attachments: DataOciCoreVolumeAttachmentsVolumeAttachmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList">DataOciCoreVolumeAttachmentsVolumeAttachmentsList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreVolumeAttachmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVolumeAttachmentsConfig <a name="DataOciCoreVolumeAttachmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_attachments

dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  availability_domain: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVolumeAttachmentsFilter]] = None,
  id: str = None,
  instance_id: str = None,
  volume_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#compartment_id DataOciCoreVolumeAttachments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#availability_domain DataOciCoreVolumeAttachments#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#id DataOciCoreVolumeAttachments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#instance_id DataOciCoreVolumeAttachments#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.volumeId">volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#volume_id DataOciCoreVolumeAttachments#volume_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#compartment_id DataOciCoreVolumeAttachments#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#availability_domain DataOciCoreVolumeAttachments#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreVolumeAttachmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#filter DataOciCoreVolumeAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#id DataOciCoreVolumeAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#instance_id DataOciCoreVolumeAttachments#instance_id}.

---

##### `volume_id`<sup>Optional</sup> <a name="volume_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#volume_id DataOciCoreVolumeAttachments#volume_id}.

---

### DataOciCoreVolumeAttachmentsFilter <a name="DataOciCoreVolumeAttachmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_attachments

dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#name DataOciCoreVolumeAttachments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#values DataOciCoreVolumeAttachments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#regex DataOciCoreVolumeAttachments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#name DataOciCoreVolumeAttachments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#values DataOciCoreVolumeAttachments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#regex DataOciCoreVolumeAttachments#regex}.

---

### DataOciCoreVolumeAttachmentsVolumeAttachments <a name="DataOciCoreVolumeAttachmentsVolumeAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_attachments

dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachments()
```


### DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices <a name="DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_attachments

dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVolumeAttachmentsFilterList <a name="DataOciCoreVolumeAttachmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_attachments

dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVolumeAttachmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreVolumeAttachmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>]]

---


### DataOciCoreVolumeAttachmentsFilterOutputReference <a name="DataOciCoreVolumeAttachmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_attachments

dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreVolumeAttachmentsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>]

---


### DataOciCoreVolumeAttachmentsVolumeAttachmentsList <a name="DataOciCoreVolumeAttachmentsVolumeAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_attachments

dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList <a name="DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_attachments

dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference <a name="DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_attachments

dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.ipv4">ipv4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.iqn">iqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices">DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.ipv4"></a>

```python
ipv4: str
```

- *Type:* str

---

##### `iqn`<sup>Required</sup> <a name="iqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.iqn"></a>

```python
iqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices">DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices</a>

---


### DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference <a name="DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_volume_attachments

dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.attachmentType">attachment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.chapSecret">chap_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.chapUsername">chap_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.device">device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.encryptionInTransitType">encryption_in_transit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.ipv4">ipv4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.iqn">iqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabled">is_agent_auto_iscsi_login_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.iscsiLoginState">iscsi_login_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isMultipath">is_multipath</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabled">is_pv_encryption_in_transit_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isReadOnly">is_read_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isShareable">is_shareable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isVolumeCreatedDuringLaunch">is_volume_created_during_launch</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.multipathDevices">multipath_devices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList">DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.useChap">use_chap</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachments">DataOciCoreVolumeAttachmentsVolumeAttachments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `chap_secret`<sup>Required</sup> <a name="chap_secret" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.chapSecret"></a>

```python
chap_secret: str
```

- *Type:* str

---

##### `chap_username`<sup>Required</sup> <a name="chap_username" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.chapUsername"></a>

```python
chap_username: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `device`<sup>Required</sup> <a name="device" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.device"></a>

```python
device: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `encryption_in_transit_type`<sup>Required</sup> <a name="encryption_in_transit_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.encryptionInTransitType"></a>

```python
encryption_in_transit_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.ipv4"></a>

```python
ipv4: str
```

- *Type:* str

---

##### `iqn`<sup>Required</sup> <a name="iqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.iqn"></a>

```python
iqn: str
```

- *Type:* str

---

##### `is_agent_auto_iscsi_login_enabled`<sup>Required</sup> <a name="is_agent_auto_iscsi_login_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabled"></a>

```python
is_agent_auto_iscsi_login_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `iscsi_login_state`<sup>Required</sup> <a name="iscsi_login_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.iscsiLoginState"></a>

```python
iscsi_login_state: str
```

- *Type:* str

---

##### `is_multipath`<sup>Required</sup> <a name="is_multipath" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isMultipath"></a>

```python
is_multipath: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_pv_encryption_in_transit_enabled`<sup>Required</sup> <a name="is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```python
is_pv_encryption_in_transit_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_read_only`<sup>Required</sup> <a name="is_read_only" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isReadOnly"></a>

```python
is_read_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_shareable`<sup>Required</sup> <a name="is_shareable" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isShareable"></a>

```python
is_shareable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_volume_created_during_launch`<sup>Required</sup> <a name="is_volume_created_during_launch" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isVolumeCreatedDuringLaunch"></a>

```python
is_volume_created_during_launch: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `multipath_devices`<sup>Required</sup> <a name="multipath_devices" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.multipathDevices"></a>

```python
multipath_devices: DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList">DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `use_chap`<sup>Required</sup> <a name="use_chap" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.useChap"></a>

```python
use_chap: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVolumeAttachmentsVolumeAttachments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachments">DataOciCoreVolumeAttachmentsVolumeAttachments</a>

---



