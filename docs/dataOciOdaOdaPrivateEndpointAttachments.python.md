# `dataOciOdaOdaPrivateEndpointAttachments` Submodule <a name="`dataOciOdaOdaPrivateEndpointAttachments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOdaOdaPrivateEndpointAttachments <a name="DataOciOdaOdaPrivateEndpointAttachments" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments oci_oda_oda_private_endpoint_attachments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_attachments

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments(
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
  oda_private_endpoint_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointAttachmentsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#compartment_id DataOciOdaOdaPrivateEndpointAttachments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.odaPrivateEndpointId">oda_private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#oda_private_endpoint_id DataOciOdaOdaPrivateEndpointAttachments#oda_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#id DataOciOdaOdaPrivateEndpointAttachments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#state DataOciOdaOdaPrivateEndpointAttachments#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#compartment_id DataOciOdaOdaPrivateEndpointAttachments#compartment_id}.

---

##### `oda_private_endpoint_id`<sup>Required</sup> <a name="oda_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.odaPrivateEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#oda_private_endpoint_id DataOciOdaOdaPrivateEndpointAttachments#oda_private_endpoint_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#filter DataOciOdaOdaPrivateEndpointAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#id DataOciOdaOdaPrivateEndpointAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#state DataOciOdaOdaPrivateEndpointAttachments#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointAttachmentsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpointAttachments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_attachments

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_attachments

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_attachments

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_attachments

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpointAttachments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOdaOdaPrivateEndpointAttachments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOdaOdaPrivateEndpointAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOdaOdaPrivateEndpointAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList">DataOciOdaOdaPrivateEndpointAttachmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.odaPrivateEndpointAttachmentCollection">oda_private_endpoint_attachment_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList">DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.odaPrivateEndpointIdInput">oda_private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.odaPrivateEndpointId">oda_private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.filter"></a>

```python
filter: DataOciOdaOdaPrivateEndpointAttachmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList">DataOciOdaOdaPrivateEndpointAttachmentsFilterList</a>

---

##### `oda_private_endpoint_attachment_collection`<sup>Required</sup> <a name="oda_private_endpoint_attachment_collection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.odaPrivateEndpointAttachmentCollection"></a>

```python
oda_private_endpoint_attachment_collection: DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList">DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointAttachmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `oda_private_endpoint_id_input`<sup>Optional</sup> <a name="oda_private_endpoint_id_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.odaPrivateEndpointIdInput"></a>

```python
oda_private_endpoint_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `oda_private_endpoint_id`<sup>Required</sup> <a name="oda_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.odaPrivateEndpointId"></a>

```python
oda_private_endpoint_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOdaOdaPrivateEndpointAttachmentsConfig <a name="DataOciOdaOdaPrivateEndpointAttachmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_attachments

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  oda_private_endpoint_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointAttachmentsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#compartment_id DataOciOdaOdaPrivateEndpointAttachments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.odaPrivateEndpointId">oda_private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#oda_private_endpoint_id DataOciOdaOdaPrivateEndpointAttachments#oda_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#id DataOciOdaOdaPrivateEndpointAttachments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#state DataOciOdaOdaPrivateEndpointAttachments#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#compartment_id DataOciOdaOdaPrivateEndpointAttachments#compartment_id}.

---

##### `oda_private_endpoint_id`<sup>Required</sup> <a name="oda_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.odaPrivateEndpointId"></a>

```python
oda_private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#oda_private_endpoint_id DataOciOdaOdaPrivateEndpointAttachments#oda_private_endpoint_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointAttachmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#filter DataOciOdaOdaPrivateEndpointAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#id DataOciOdaOdaPrivateEndpointAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#state DataOciOdaOdaPrivateEndpointAttachments#state}.

---

### DataOciOdaOdaPrivateEndpointAttachmentsFilter <a name="DataOciOdaOdaPrivateEndpointAttachmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_attachments

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#name DataOciOdaOdaPrivateEndpointAttachments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#values DataOciOdaOdaPrivateEndpointAttachments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#regex DataOciOdaOdaPrivateEndpointAttachments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#name DataOciOdaOdaPrivateEndpointAttachments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#values DataOciOdaOdaPrivateEndpointAttachments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#regex DataOciOdaOdaPrivateEndpointAttachments#regex}.

---

### DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection <a name="DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_attachments

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection()
```


### DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems <a name="DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_attachments

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOdaOdaPrivateEndpointAttachmentsFilterList <a name="DataOciOdaOdaPrivateEndpointAttachmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_attachments

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointAttachmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>]]

---


### DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference <a name="DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_attachments

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOdaOdaPrivateEndpointAttachmentsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>]

---


### DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList <a name="DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_attachments

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference <a name="DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_attachments

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.odaInstanceId">oda_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.odaPrivateEndpointId">oda_private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems">DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `oda_instance_id`<sup>Required</sup> <a name="oda_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.odaInstanceId"></a>

```python
oda_instance_id: str
```

- *Type:* str

---

##### `oda_private_endpoint_id`<sup>Required</sup> <a name="oda_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.odaPrivateEndpointId"></a>

```python
oda_private_endpoint_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems">DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems</a>

---


### DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList <a name="DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_attachments

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference <a name="DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_attachments

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList">DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection">DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.property.items"></a>

```python
items: DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList">DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection">DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection</a>

---



