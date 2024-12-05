# `dataOciCertificatesManagementCaBundles` Submodule <a name="`dataOciCertificatesManagementCaBundles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCertificatesManagementCaBundles <a name="DataOciCertificatesManagementCaBundles" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles oci_certificates_management_ca_bundles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_ca_bundles

dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ca_bundle_id: str = None,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCaBundlesFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.caBundleId">ca_bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#ca_bundle_id DataOciCertificatesManagementCaBundles#ca_bundle_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#compartment_id DataOciCertificatesManagementCaBundles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter">DataOciCertificatesManagementCaBundlesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#id DataOciCertificatesManagementCaBundles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#name DataOciCertificatesManagementCaBundles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#state DataOciCertificatesManagementCaBundles#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ca_bundle_id`<sup>Optional</sup> <a name="ca_bundle_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.caBundleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#ca_bundle_id DataOciCertificatesManagementCaBundles#ca_bundle_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#compartment_id DataOciCertificatesManagementCaBundles#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter">DataOciCertificatesManagementCaBundlesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#filter DataOciCertificatesManagementCaBundles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#id DataOciCertificatesManagementCaBundles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#name DataOciCertificatesManagementCaBundles#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#state DataOciCertificatesManagementCaBundles#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetCaBundleId">reset_ca_bundle_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCaBundlesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter">DataOciCertificatesManagementCaBundlesFilter</a>]]

---

##### `reset_ca_bundle_id` <a name="reset_ca_bundle_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetCaBundleId"></a>

```python
def reset_ca_bundle_id() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCertificatesManagementCaBundles resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_ca_bundles

dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_ca_bundles

dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_ca_bundles

dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_ca_bundles

dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCertificatesManagementCaBundles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCertificatesManagementCaBundles to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCertificatesManagementCaBundles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCertificatesManagementCaBundles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.caBundleCollection">ca_bundle_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList">DataOciCertificatesManagementCaBundlesCaBundleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList">DataOciCertificatesManagementCaBundlesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.caBundleIdInput">ca_bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter">DataOciCertificatesManagementCaBundlesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.caBundleId">ca_bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `ca_bundle_collection`<sup>Required</sup> <a name="ca_bundle_collection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.caBundleCollection"></a>

```python
ca_bundle_collection: DataOciCertificatesManagementCaBundlesCaBundleCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList">DataOciCertificatesManagementCaBundlesCaBundleCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.filter"></a>

```python
filter: DataOciCertificatesManagementCaBundlesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList">DataOciCertificatesManagementCaBundlesFilterList</a>

---

##### `ca_bundle_id_input`<sup>Optional</sup> <a name="ca_bundle_id_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.caBundleIdInput"></a>

```python
ca_bundle_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCaBundlesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter">DataOciCertificatesManagementCaBundlesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `ca_bundle_id`<sup>Required</sup> <a name="ca_bundle_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.caBundleId"></a>

```python
ca_bundle_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCertificatesManagementCaBundlesCaBundleCollection <a name="DataOciCertificatesManagementCaBundlesCaBundleCollection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_ca_bundles

dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollection()
```


### DataOciCertificatesManagementCaBundlesCaBundleCollectionItems <a name="DataOciCertificatesManagementCaBundlesCaBundleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_ca_bundles

dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItems()
```


### DataOciCertificatesManagementCaBundlesConfig <a name="DataOciCertificatesManagementCaBundlesConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_ca_bundles

dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ca_bundle_id: str = None,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCaBundlesFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.caBundleId">ca_bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#ca_bundle_id DataOciCertificatesManagementCaBundles#ca_bundle_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#compartment_id DataOciCertificatesManagementCaBundles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter">DataOciCertificatesManagementCaBundlesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#id DataOciCertificatesManagementCaBundles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#name DataOciCertificatesManagementCaBundles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#state DataOciCertificatesManagementCaBundles#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ca_bundle_id`<sup>Optional</sup> <a name="ca_bundle_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.caBundleId"></a>

```python
ca_bundle_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#ca_bundle_id DataOciCertificatesManagementCaBundles#ca_bundle_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#compartment_id DataOciCertificatesManagementCaBundles#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCaBundlesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter">DataOciCertificatesManagementCaBundlesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#filter DataOciCertificatesManagementCaBundles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#id DataOciCertificatesManagementCaBundles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#name DataOciCertificatesManagementCaBundles#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#state DataOciCertificatesManagementCaBundles#state}.

---

### DataOciCertificatesManagementCaBundlesFilter <a name="DataOciCertificatesManagementCaBundlesFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_ca_bundles

dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#name DataOciCertificatesManagementCaBundles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#values DataOciCertificatesManagementCaBundles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#regex DataOciCertificatesManagementCaBundles#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#name DataOciCertificatesManagementCaBundles#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#values DataOciCertificatesManagementCaBundles#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#regex DataOciCertificatesManagementCaBundles#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList <a name="DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_ca_bundles

dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference <a name="DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_ca_bundles

dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.caBundlePem">ca_bundle_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItems">DataOciCertificatesManagementCaBundlesCaBundleCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_bundle_pem`<sup>Required</sup> <a name="ca_bundle_pem" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.caBundlePem"></a>

```python
ca_bundle_pem: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCaBundlesCaBundleCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItems">DataOciCertificatesManagementCaBundlesCaBundleCollectionItems</a>

---


### DataOciCertificatesManagementCaBundlesCaBundleCollectionList <a name="DataOciCertificatesManagementCaBundlesCaBundleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_ca_bundles

dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference <a name="DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_ca_bundles

dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList">DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollection">DataOciCertificatesManagementCaBundlesCaBundleCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.property.items"></a>

```python
items: DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList">DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCertificatesManagementCaBundlesCaBundleCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollection">DataOciCertificatesManagementCaBundlesCaBundleCollection</a>

---


### DataOciCertificatesManagementCaBundlesFilterList <a name="DataOciCertificatesManagementCaBundlesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_ca_bundles

dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCertificatesManagementCaBundlesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter">DataOciCertificatesManagementCaBundlesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCertificatesManagementCaBundlesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter">DataOciCertificatesManagementCaBundlesFilter</a>]]

---


### DataOciCertificatesManagementCaBundlesFilterOutputReference <a name="DataOciCertificatesManagementCaBundlesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_certificates_management_ca_bundles

dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter">DataOciCertificatesManagementCaBundlesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCertificatesManagementCaBundlesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter">DataOciCertificatesManagementCaBundlesFilter</a>]

---



